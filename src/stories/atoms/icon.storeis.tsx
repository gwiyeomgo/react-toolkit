import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../lib/Icon/icon';

const meta = {
  title: '1.Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rotate: -20,
    icon: 'Degrees360',
    color: '#1E90FF',
    size: 30,
  },
};
