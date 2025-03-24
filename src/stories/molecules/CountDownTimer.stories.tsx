import type { Meta, StoryObj } from '@storybook/react';
import { CountdownTimer } from '../../lib/CountdownTimer/countdownTimer';
import dayjs from 'dayjs';

const meta = {
  title: '2.Molecules/CountdownTimer',
  component: CountdownTimer,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'suffix', 'none'],
    },
  },
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

const getTimeNextWeek = (weeks: number) => {
  return dayjs().add(weeks, 'week').format('YYYYMMDDHHmmss');
};

export const Default: Story = {
  args: {
    targetTime: getTimeNextWeek(7),
    fontSize: 20,
  },
};

export const TimerWithSuffix: Story = {
  args: {
    type: 'suffix',
    targetTime: getTimeNextWeek(7),
    fontSize: 30,
  },
};

export const OnlyTimer: Story = {
  args: {
    type: 'none',
    targetTime: getTimeNextWeek(7),
    fontSize: 40,
  },
};

export const ExpiredTimer: Story = {
  args: {
    type: 'none',
    targetTime: '20240729000000',
    fontSize: 40,
  },
};
