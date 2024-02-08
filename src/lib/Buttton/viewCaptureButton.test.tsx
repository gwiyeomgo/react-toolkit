import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from './viewCaptureButton';
import React from 'react';
import html2canvas from 'html2canvas';

//URL mock
interface OriginalURL {
  revokeObjectURL: (href: string) => void;
  new (url: string | URL, base?: string | URL | undefined): URL;
  prototype: URL;
  createObjectURL(obj: Blob | MediaSource): string;
}
const originalURL: OriginalURL = globalThis.URL;
beforeEach(() => {
  globalThis.URL = {
    revokeObjectURL: jest.fn(),
  } as unknown as OriginalURL;
});

afterEach(() => {
  globalThis.URL = originalURL;
});

// html2canvas를 프로미스를 반환하도록 모킹
jest.mock('html2canvas', () => ({
  ...jest.requireActual('html2canvas'),
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    toDataURL: jest.fn().mockResolvedValue('mocked-image'),
  }),
}));

it('captures view on button click', async () => {
  render(
    <ViewCaptureButton downloadFileName="test" downloadButtonName="download">
      <div
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
  userEvent.click(button);
  await act(() => {
    expect(html2canvas).toHaveBeenCalledWith(screen.getByTestId('test-view'));
  });
});
