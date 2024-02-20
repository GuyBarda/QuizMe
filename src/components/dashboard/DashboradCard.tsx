'use client';

import { BrainCircuit, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useRouter } from 'next/navigation';

type Props = {
    title: string;
    desc: string;
    icon: string;
    goTo: string;
};

export default function DashboardCard({ title, desc, icon, goTo }: Props) {
    const router = useRouter();

    const getIcon = () => {
        if (icon === 'brain')
            return <BrainCircuit size={28} strokeWidth={2.5} />;
        if (icon === 'history') return <History size={28} strokeWidth={2.5} />;
        else return icon;
    };

    return (
        <Card
            className="hover:cursor-pointer hover:opacity-75"
            onClick={() => router.push(goTo)}
        >
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                {getIcon()}
            </CardHeader>

            <CardContent>
                <p className=" text-sm text-muted-foreground">{desc}</p>
            </CardContent>
        </Card>
    );
}
