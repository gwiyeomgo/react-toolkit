import type { Meta, StoryObj } from '@storybook/react';
import { Timelines } from '../../lib';

const data = [
    {
        id: 1,
        url: '/test/2020',
        tag: '2020',
        title: '입사',
        contents: '2020년 ** 에 입사했습니다.',
    },
    {
        id: 2,
        url: '/test/2021',
        tag: '2021',
        title: '1년차 회고',
        contents: '1년차 개발자가 되었습니다.',
    },
    {
        id: 3,
        url: '/test/2022',
        tag: '2022',
        title: '꾸준하게 공부 하자!!!',
        contents: '배울게 너무 많다...',
    },
];
const meta = {
    title: '4.Templates/TimeLines',
    component: Timelines,
    tags: ['autodocs'],
} satisfies Meta<typeof Timelines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: data,
    },
};
