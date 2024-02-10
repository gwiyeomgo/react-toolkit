import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from './viewCaptureButton';
import React from 'react';
import html2canvas from 'html2canvas';

// html2canvas를 프로미스를 반환하도록 모킹
jest.mock('html2canvas', () => ({
  ...jest.requireActual('html2canvas'),
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    //toDataURL과 관련된 부분은 브라우저 환경에서 작동하는 기능이기 때문에 JSDOM 환경에서는 어려움 -> 콘솔 경고 발생
    toDataURL: jest.fn().mockResolvedValue('mocked-image'),
  }),
}));

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
