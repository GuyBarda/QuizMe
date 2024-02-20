import QuizCreation from '@/components/QuizCreation';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Quiz | QuizMe',
};

export default async function QuizPage() {
    const session = await getAuthSession();

    if (!session?.user) return redirect('/');

    return <QuizCreation />;
}
