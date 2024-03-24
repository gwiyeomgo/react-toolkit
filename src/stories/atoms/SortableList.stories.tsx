import type { Meta, StoryObj } from '@storybook/react';
import { SortableList } from '../../lib/SortableList/sortableList';

const meta = {
  title: '1.Atoms/SortableList',
  component: SortableList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SortableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialList: ['1', '@', '#', 'A', '🤩'],
    height: 100,
    containerStyle: { width: '200px' },
    itemStyle: { padding: '3px' },
  },
};
