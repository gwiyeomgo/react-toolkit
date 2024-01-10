import type { Meta, StoryObj } from '@storybook/react';
import SearchCondigions from './searchCondigions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '3.Organisms/SearchCondigions',
  component: SearchCondigions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchCondigions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInput3: Story = {
  args: {},
};