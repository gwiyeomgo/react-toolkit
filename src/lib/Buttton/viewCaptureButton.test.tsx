import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from "./viewCaptureButton"
import React from 'react';

jest.mock('html2canvas', () => ({
  __esModule: true,
  default: jest.fn(),
}));

it('renders button and captures view on button click', async () => {
  // Render the component
  render(
    <ViewCaptureButton downloadFileName="test" downloadButtonName="download">
      <div
        data-testid="capture-content"
        style={{
          padding: 0,
          backgroundColor: 'skyblue',
        }}
      >
        {'test 데이터 입니다.'}
      </div>
    </ViewCaptureButton>,
  );

  const button = screen.getByRole('button', {
    name: 'download',
  });

  // Click the button
  await act(async () => {
    userEvent.click(button);
  });
});
