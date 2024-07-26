import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as excel from './excelDownloadButton';
import accessibilityTest from '../../../tests/accessibilityTest';
import mountTest from '../../../tests/mountTest';

//https://stackoverflow.com/questions/54090231/how-to-fix-error-not-implemented-navigation-except-hash-changes
//console.error
//Error: Not implemented: navigation (except hash changes)
//jsdom does not support navigation
//URL mock
const originalURL: OriginalURL = globalThis.URL;

type OriginalURL = {
  revokeObjectURL: (href: string) => void;
  new (url: string | URL, base?: string | URL | undefined): URL;
  prototype: URL;
  createObjectURL(obj: Blob | MediaSource): string;
};

beforeEach(() => {
  globalThis.URL = {
    createObjectURL: jest.fn(),
  } as unknown as OriginalURL;
});
afterEach(() => {
  globalThis.URL = originalURL;
});

//TODO any 말고 다른거 쓰고 싶음
//eslint 에러:The members of 'excel' are read-only
//https://eslint.org/docs/latest/rules/no-import-assign#rule-details
function mock(obj: any) {
  obj.ChildCSVLink = jest.fn();
}
mock(excel);

const headers = [
  { label: 'A', key: 'a' },
  { label: 'B', key: 'b' },
];

const data = [{ a: 'aaa', b: 'bbb' }];

describe('test', () => {
  mountTest(excel.ExcelDownloadButton as any);
  accessibilityTest(excel.ExcelDownloadButton as any);

  it('버튼 렌더링 확인', () => {
    act(() => {
      render(
        <excel.ExcelDownloadButton
          headers={[]}
          fileName="다운로드"
          buttonName="버튼1"
          fetchData={() => undefined}
        />,
      );
    });
    const buttonElement = screen.getByRole('button');
    waitFor(() => {
      expect(buttonElement).toBeInTheDocument();
    });
  });

  it('파일 다운로드', () => {
    const fetchData = jest.fn(() => {
      return data;
    });
    act(() => {
      render(
        <excel.ExcelDownloadButton
          buttonName="버튼2"
          fileName="test.csv"
          headers={headers}
          fetchData={fetchData}
        ></excel.ExcelDownloadButton>,
      );
    });

    const buttonElement = screen.getByRole('button');
    act(() => {
      userEvent.click(buttonElement);
    });

    waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });
  });
});
