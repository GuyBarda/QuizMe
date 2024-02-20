'use client';

import { useTheme } from 'next-themes';
import D3WordCloud from 'react-d3-cloud';

const data = [
    {
        text: 'hey',
        value: 3,
    },
    {
        text: 'dsafq',
        value: 5,
    },
    {
        text: 'casada',
        value: 8,
    },
    {
        text: 'asczxw',
        value: 10,
    },
];

export default function CustomWordCloud() {
    const { theme } = useTheme();

    const fontSizeWrapper = ({ value }: { value: number }) =>
        Math.log2(value) * 5 + 16;

    return (
        <>
            <D3WordCloud
                height={650}
                data={data}
                font={'Times'}
                fontSize={fontSizeWrapper}
                rotate={0}
                padding={10}
                fill={theme == 'dark' ? 'white' : 'black'}
            ></D3WordCloud>
        </>
    );
}
