import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './selectBox';

const meta = {
  title: '3.Organisms/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
