import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from '../../lib/Buttton/likeButton';

const meta = {
  title: '1.Atoms/LikeButton',
  component: LikeButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
