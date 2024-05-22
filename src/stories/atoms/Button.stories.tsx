import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../lib';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '1.Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '버튼 유형 선택',
    },
    disabled: {
      control: 'select',
      options: [true, false],
    },
    danger: {
      control: 'select',
      options: [true, false],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: 'primary',
    children: '버튼',
    disabled: false,
  },
};

export const ButtonWithLoading: Story = {
  args: {
    type: 'secondary',
    children: '버튼',
    loading: true,
    disabled: false,
  },
};

export const ButtonWithDanger: Story = {
  args: {
    type: 'secondary',
    danger: true,
    children: '버튼',
  },
};
