import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../../lib/Loading/loading';

const meta = {
  title: '1.Atoms/Loading',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoading: Story = {
  args: {
    type: 'default',
    size: 10,
    color: 'pink',
    speed: 5,
  },
};

export const DottedLoading: Story = {
  args: {
    type: 'default',
    size: 10,
    speed: 5,
    style: {
      border: '8px dotted red',
      backgroundColor: 'rgba(255, 0, 0, 0)',
    },
  },
};
export const lineLoading1: Story = {
  args: {
    type: 'line',
    size: 10,
    speed: 2,
  },
};

export const lineLoading2: Story = {
  args: {
    type: 'line',
    size: 10,
    speed: 5,
    colorPalette: ['#00b8ff', '#0097e1', '#0876b8', '#004fa7'],
  },
};
