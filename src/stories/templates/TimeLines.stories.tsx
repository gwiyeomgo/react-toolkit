import type { Meta, StoryObj } from '@storybook/react';
import TimeLines from './timeLines';

const meta = {
  title: '4.Templates/TimeLines',
  component: TimeLines,
  tags: ['autodocs'],
} satisfies Meta<typeof TimeLines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
