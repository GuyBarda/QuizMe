import DashboardCard from '@/components/dashboard/DashboradCard';
import HotTopicsCard from '@/components/dashboard/HotTopicsCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

type Props = {};

export const metadata = {
    title: 'Dashboard',
};

export default async function Dashboard({}: Props) {
    const session = await getAuthSession();
    if (!session?.user) return redirect('/');

    return (
        <main className="p-8 mx-auto max-w-7xl ">
            <div className="flex items-center">
                <h2 className="mr-2 text-3xl font-bold tracking-tight">
                    Dashboard
                </h2>
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2">
                <DashboardCard
                    title="Quiz Me!"
                    desc="Challenge yourself with a quiz!"
                    icon="brain"
                    goTo="/quiz"
                />
                <DashboardCard
                    title="History"
                    desc="View your past quiz attempts"
                    icon="history"
                    goTo="/history"
                />
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <HotTopicsCard />
                <RecentActivities />
            </div>
        </main>
    );
}
