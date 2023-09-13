import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

type Props = {};

export const metadata = {
    title: 'Dashboard',
};

export default async function Dashboard({}: Props) {
    const session = await getAuthSession();
    if (!session?.user) return redirect('/');

    return <div>Dashboard</div>;
}
