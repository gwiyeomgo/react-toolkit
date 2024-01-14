import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from '../../lib';

const meta = {
  title: '1.Atoms/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    id: { type: 'string' },
    toggled: { control: 'select', options: [true, false] },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'test-switch',
    toggled: true,
  },
};
