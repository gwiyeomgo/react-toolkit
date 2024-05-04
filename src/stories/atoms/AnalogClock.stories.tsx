import type { Meta, StoryObj } from '@storybook/react';
import { AnalogClock } from '../../lib/Clock/analogClock';

const meta = {
  title: '1.Atoms/AnalogClock',
  component: AnalogClock,
  tags: ['autodocs'],
} satisfies Meta<typeof AnalogClock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(),
  },
};
