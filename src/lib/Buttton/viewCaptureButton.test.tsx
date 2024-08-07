import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from './viewCaptureButton';
import React from 'react';
import html2canvas from 'html2canvas';
import accessibilityTest from '../../../tests/accessibilityTest';
import mountTest from '../../../tests/mountTest';

//URL mock ->revokeObjectURL 로 에러 발생
type OriginalURL = {
  revokeObjectURL: (href: string) => void;
  new (url: string | URL, base?: string | URL | undefined): URL;
  prototype: URL;
  createObjectURL(obj: Blob | MediaSource): string;
};
const originalURL: OriginalURL = globalThis.URL;

describe('컴포넌트 캡처 버튼', () => {
  mountTest(ViewCaptureButton as any);
  accessibilityTest(ViewCaptureButton as any);
  beforeEach(() => {
    globalThis.URL = {
      revokeObjectURL: jest.fn(),
    } as unknown as OriginalURL;
  });

  afterEach(() => {
    globalThis.URL = originalURL;
  });

  it('captures view on button click', () => {
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

    const button = screen.getByRole('button');
    act(() => {
      userEvent.click(button);
    });

    waitFor(() => {
      expect(html2canvas).toHaveBeenCalledWith(screen.getByTestId('test-view'));
    });
  });
});
