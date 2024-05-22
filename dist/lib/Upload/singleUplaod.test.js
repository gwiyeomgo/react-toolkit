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
import { SingleUpload } from './singleUplaod';
import { fireEvent } from '@storybook/test';
it('SingleUpload', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const done = jest.fn();
    const props = {
      imageFileOnly: false,
      onSave: (image) =>
        __awaiter(void 0, void 0, void 0, function* () {
          console.log(image);
          done();
        }),
    };
    render(React.createElement(SingleUpload, Object.assign({}, props)));
    yield act(() => {
      const fileInput = screen.getByTestId('Upload');
      const file = new File(['text......'], 'test2.txt', {
        type: 'text/plain',
      });
      const fileChangeEvent = { target: { files: [file] } };
      //파일 변경
      fireEvent.change(fileInput, fileChangeEvent);
    });
    yield waitFor(() => {
      expect(done).toHaveBeenCalled();
    });
  }));
