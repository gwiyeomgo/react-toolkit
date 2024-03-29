import type { Meta, StoryObj } from '@storybook/react';
import { ConnectUserExample } from './connectUserExample';

const meta = {
  title: '5.Test/ConnectUserExample',
  component: ConnectUserExample,
  tags: ['autodocs'],
} satisfies Meta<typeof ConnectUserExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
