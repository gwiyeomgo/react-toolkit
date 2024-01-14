import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../lib/Textarea/textarea';

const meta = {
  title: '1.Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
