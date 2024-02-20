import { prisma } from '@/lib/db';
import { getAuthSession } from '@/lib/nextauth';
import { quizCreationScheme } from '@/schemes/form/quiz';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import axios from 'axios';

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'You must be logged in' },
        { status: 401 }
      );
    }
    const body = await req.json();
    const { amount, topic, type } = quizCreationScheme.parse(body);
    const game = await prisma.game.create({
      data: {
        gameType: type,
        timeStarted: new Date(),
        userId: session.user.id,
        topic,
      },
    });

    const { data } = await axios.post(`${process.env.API_URL}/api/questions`, {
      amount,
      topic,
      type,
    });

    if (type === 'mcq') {
      type mcqQuestion = {
        question: string;
        answer: string;
        option1: string;
        option2: string;
        option3: string;
      };
      let manyData = data.questions.map((q: mcqQuestion) => {
        let options = [q.answer, q.option1, q.option2, q.option3];
        options = options.sort(() => Math.random() - 0.5);
        return {
          question: q.question,
          answer: q.answer,
          options: JSON.stringify(options),
          gameId: game.id,
          questionType: 'mcq',
        };
      });
      await prisma.question.createMany({
        data: manyData,
      });
    } else if (type === 'open_ended') {
      type openQuestion = {
        question: string;
        answer: string;
      };
      let manyData = data.questions.map((q: openQuestion) => {
        return {
          question: q.question,
          answer: q.answer,
          gameId: game.id,
          questionType: 'open_ended',
        };
      });
      await prisma.question.createMany({
        data: manyData,
      });
    }
    return NextResponse.json({ gameId: game.id });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'something went wrong' },
      { status: 500 }
    );
  }
}
