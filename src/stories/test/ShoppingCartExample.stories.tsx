import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCartExample } from './shoppingCartExample';

const meta = {
  title: '5.Test/ShoppingCartExample',
  component: ShoppingCartExample,
  tags: ['autodocs'],
} satisfies Meta<typeof ShoppingCartExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
