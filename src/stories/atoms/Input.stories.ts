import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../lib/Input/input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '1.Atoms/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: {},
      description: '입력값',
    },
    label: {
      control: { type: 'string' },
    },
    placeholder: {
      control: { type: 'string' },
    },
    labelStyle: {},
    readOnly: { type: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const LabelInput: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력해 주세요',
    labelStyle: { color: 'red' },
  },
};

export const readOnlyLabelInput: Story = {
  args: {
    label: '이름은몇자까지들',
    value: '홍길동',
    readOnly: true,
  },
};
