import type { Meta, StoryObj } from '@storybook/react';
import { BroadcastExample } from './broadcastExample';

const meta = {
  title: '5.Test/UseBroadcastExample',
  component: BroadcastExample,
  tags: ['autodocs'],
} satisfies Meta<typeof BroadcastExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
