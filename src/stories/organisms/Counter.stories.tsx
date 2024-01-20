import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from '../../lib/Counter/counter';

const meta = {
  title: '3.Organisms/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    getDebouncedResult: (value) => {
      try {
        console.log(' debounced value:', value);
      } catch (error) {
        console.error('Error calling API:', error);
      }
    },
  },
};
