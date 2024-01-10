import type { Meta, StoryObj } from '@storybook/react';
import { MessageGroup } from '../../lib/Messages/messageGroup';

const meta = {
  title: '4.Templates/Messages',
  component: MessageGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    list: {
      description: '버튼 유형 선택',
    },
    delay: {
      control: 'select',
      options: [1000, 2000, 3000],
    },
    addMessage: {
      control: 'select',
      options: [true, false],
    },
  },
} satisfies Meta<typeof MessageGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    addMessage: true,
    delay: 3000,
    list: [
      {
        id: 1,
        message: '안녕하세요',
        style: {
          color: '#619290',
        },
      },
      {
        id: 2,
        message: '메시지가',
        style: {
          color: '#79B6B4',
        },
      },
      {
        id: 3,
        message: '1000초 간격으로 새로운 메시지가 보입니다.',
        style: {
          color: '#00bdb4',
        },
      },
    ],
  },
};
