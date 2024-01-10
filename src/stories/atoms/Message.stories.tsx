import type { Meta, StoryObj } from '@storybook/react';
import { Message } from '../../lib/Messages/message';

const meta = {
  title: '1.Atoms/Message',
  component: Message,
  tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    children: '안녕하세요.',
  },
};

export const Default2: Story = {
  args: {
    id: 2,
    children: '안녕하세요.',
    style: { backgroundColor: '#62E5C2' },
  },
};
