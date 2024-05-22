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
import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { fireEvent } from '@storybook/test';
import { FileUpload } from './fileUpload';
const originalURL = globalThis.URL;
beforeEach(() => {
  globalThis.URL = {
    createObjectURL: jest.fn(),
  };
});
afterEach(() => {
  globalThis.URL = originalURL;
});
it('jpg 파일 테스트', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const done = jest.fn();
    const save = () => {
      done();
    };
    render(React.createElement(FileUpload, { selectFile: save }));
    yield act(() => {
      const fileInput = screen.getByTestId('Upload');
      const imageFile = new File(['image ...'], 'test.jpg', {
        type: 'image/jpeg',
      });
      fireEvent.change(fileInput, { target: { files: [imageFile] } });
    });
    yield waitFor(() => {
      expect(done).toHaveBeenCalled();
    });
  }));
it('heic 파일 테스트', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const done = jest.fn();
    render(
      React.createElement(FileUpload, {
        selectFile: () => {
          done();
        },
      }),
    );
    yield act(() => {
      const fileInput = screen.getByTestId('Upload');
      const imageFile = new File(['heic ...'], 'test3.jpg', {
        type: 'image/heic',
      });
      fireEvent.change(fileInput, { target: { files: [imageFile] } });
    });
    yield waitFor(() => {
      expect(done).toHaveBeenCalled();
    });
  }));
