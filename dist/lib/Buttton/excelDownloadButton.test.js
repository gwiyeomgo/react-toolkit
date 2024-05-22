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
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as excel from './excelDownloadButton';
//https://stackoverflow.com/questions/54090231/how-to-fix-error-not-implemented-navigation-except-hash-changes
//console.error
//Error: Not implemented: navigation (except hash changes)
//jsdom does not support navigation
//URL mock
const originalURL = globalThis.URL;
beforeEach(() => {
  globalThis.URL = {
    createObjectURL: jest.fn(),
  };
});
afterEach(() => {
  globalThis.URL = originalURL;
});
//TODO any 말고 다른거 쓰고 싶음
//eslint 에러:The members of 'excel' are read-only
//https://eslint.org/docs/latest/rules/no-import-assign#rule-details
function mock(obj) {
  obj.ChildCSVLink = jest.fn();
}
mock(excel);
const headers = [
  { label: 'A', key: 'a' },
  { label: 'B', key: 'b' },
];
const data = [{ a: 'aaa', b: 'bbb' }];
describe('test', () => {
  it('버튼 렌더링 확인', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield act(() =>
        __awaiter(void 0, void 0, void 0, function* () {
          render(
            React.createElement(excel.ExcelDownloadButton, {
              headers: [],
              fileName: '\uB2E4\uC6B4\uB85C\uB4DC',
              buttonName: '\uBC84\uD2BC1',
              fetchData: () => undefined,
            }),
          );
        }),
      );
      yield waitFor(() => {
        const buttonElement = screen.getByText('버튼1');
        expect(buttonElement).toBeInTheDocument();
      });
    }));
  it('파일 다운로드', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const fetchData = jest.fn(() => {
        return data;
      });
      yield act(() =>
        __awaiter(void 0, void 0, void 0, function* () {
          render(
            React.createElement(excel.ExcelDownloadButton, {
              buttonName: '\uBC84\uD2BC2',
              fileName: 'test.csv',
              headers: headers,
              fetchData: fetchData,
            }),
          );
        }),
      );
      yield act(() =>
        __awaiter(void 0, void 0, void 0, function* () {
          const buttonElement = screen.getByText('버튼2');
          userEvent.click(buttonElement);
        }),
      );
      yield waitFor(() => {
        expect(fetchData).toHaveBeenCalled();
      });
    }));
});
