import type { Meta, StoryObj } from '@storybook/react';
import { ViewCaptureButton } from '../../lib';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imageUrl from '../assets/img.png';
const meta = {
  title: '4.Templates/ViewCaptureButton',
  component: ViewCaptureButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ViewCaptureButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    downloadFileName: 'test',
    downloadButtonName: 'download',
    children: (
      <>
        <img src={imageUrl} style={{ width: '300px' }} />
        <div
          style={{
            padding: 0,
            backgroundColor: 'skyblue',
          }}
        >
          {'test 데이터 입니다.'}
        </div>
      </>
    ),
  },
};
