import type { Meta, StoryObj } from '@storybook/react';

import { EntranceControlModule } from '../../lib/Counter/entranceControlModule';

const meta = {
  title: '3.Organisms/EntranceControlModule',
  component: EntranceControlModule,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EntranceControlModule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    exitBtn: true,
    entranceBtn: true,
  },
};
