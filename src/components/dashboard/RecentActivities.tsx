import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import Link from 'next/link';

export default function RecentActivities() {
    return (
        <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    <Link href="/history">Recent Activity</Link>
                </CardTitle>
                <CardDescription>
                    You have played a total of quizzes.
                </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[580px] overflow-scroll">
                histories
                {/* <HistoryComponent limit={10} userId={session.user.id} /> */}
            </CardContent>
        </Card>
    );
}
