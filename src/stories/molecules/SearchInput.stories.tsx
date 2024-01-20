import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../../lib/SearchInput/searchInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '2.Molecules/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonStyle: {},
    inputStyle: {},
    onClickSearch: (str) => {
      console.log('검색', str);
    },
  },
};
