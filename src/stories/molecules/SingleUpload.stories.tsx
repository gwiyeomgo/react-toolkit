import type { Meta, StoryObj } from '@storybook/react';
import { SingleUpload } from '../../lib/Upload/SingleUplaod';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '2.Molecules/SingleUpload',
  component: SingleUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SingleUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isImageFile: false,
    onSave: async (file) => {
      console.log('Default :', file);
    },
  },
};

export const ImageUpload: Story = {
  args: {
    isImageFile: true,
    onSave: async (file) => {
      console.log('ImageUpload :', file);
    },
  },
};
