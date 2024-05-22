var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewCaptureButton } from './viewCaptureButton';
import React from 'react';
import html2canvas from 'html2canvas';
const originalURL = globalThis.URL;
beforeEach(() => {
  globalThis.URL = {
    revokeObjectURL: jest.fn(),
  };
});
afterEach(() => {
  globalThis.URL = originalURL;
});
it('captures view on button click', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(
      React.createElement(
        ViewCaptureButton,
        { downloadFileName: 'test', downloadButtonName: 'download' },
        React.createElement(
          'div',
          {
            style: {
              padding: 0,
              backgroundColor: 'skyblue',
            },
          },
          'test 데이터 입니다.',
        ),
      ),
    );
    const button = screen.getByRole('button', {
      name: 'download',
    });
    yield act(() => {
      userEvent.click(button);
    });
    yield act(() => {
      expect(html2canvas).toHaveBeenCalledWith(screen.getByTestId('test-view'));
    });
  }));
