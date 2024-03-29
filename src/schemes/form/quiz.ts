import { z } from 'zod';

export const quizCreationScheme = z.object({
    type: z.enum(['mcq', 'open_ended']),
    amount: z.number().min(1).max(10),
    topic: z
        .string()
        .min(4, { message: 'topic must be at least 4 characters long' })
        .max(50, { message: 'topic must be less than 50 characters long' }),
});
