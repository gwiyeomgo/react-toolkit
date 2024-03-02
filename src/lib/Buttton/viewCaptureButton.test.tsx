import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from './viewCaptureButton';
import React from 'react';
import html2canvas from 'html2canvas';

//URL mock ->revokeObjectURL 로 에러 발생
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
  await act(() => {
    userEvent.click(button);
  });
  await act(() => {
    expect(html2canvas).toHaveBeenCalledWith(screen.getByTestId('test-view'));
  });
});
