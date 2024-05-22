import type { Meta, StoryObj } from '@storybook/react';
import { Clock } from '../../lib';

const meta = {
  title: '1.Atoms/Clock',
  component: Clock,
  tags: ['autodocs'],
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(),
  },
};
