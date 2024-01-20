import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from '../../lib/SelectBox/selectBox';

const meta = {
  title: '3.Organisms/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        value: 'A',
        label: 'Option 1',
      },
      {
        id: 2,
        value: 'B',
        label: 'Option 2',
      },
      {
        id: 3,
        value: 'C',
        label: 'Option 3',
      },
    ],
  },
};
