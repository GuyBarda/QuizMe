import CustomWordCloud from '../CustomWordCloud';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';

type Props = {};

export default function HotTopicsCard({}: Props) {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
                <CardDescription>
                    Click on a topic to start a quiz on it.
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                {/* <WordCloud formattedTopics={formattedTopics} /> */}
                <CustomWordCloud />
            </CardContent>
        </Card>
    );
}
