import type { Meta, StoryObj } from '@storybook/react';
import { CountdownTimer } from '../../lib/CountdownTimer/countdownTimer';

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

export const Default1: Story = {
  args: {
    targetTime: '20241224120000',
    fontSize: 20,
  },
};

export const Default2: Story = {
  args: {
    type: 'suffix',
    targetTime: '20241224120000',
    fontSize: 30,
  },
};

export const Default3: Story = {
  args: {
    type: 'none',
    targetTime: '20241224120000',
    fontSize: 40,
  },
};
