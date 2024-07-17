import type { Meta, StoryObj } from '@storybook/react';
import { DroppableList } from '../../lib/SortableList/droppableList';

const meta = {
  title: '4.Templates/DroppableList',
  component: DroppableList,
  tags: ['autodocs'],
} satisfies Meta<typeof DroppableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
