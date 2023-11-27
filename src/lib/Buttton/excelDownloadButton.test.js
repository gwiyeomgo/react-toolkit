import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as excel from './excelDownloadButton';
import { CountdownTimer } from '../CountdownTimer/countdownTimer';
import React from 'react';

excel.ChildCSVLink = jest.fn();

const headers = [
  { label: 'A', key: 'a' },
  { label: 'B', key: 'b' },
];
const data = [{ a: 'aaa', b: 'bbb' }];

describe('test', () => {
  it('버튼 렌더링 확인', async () => {
    render(
      <excel.ExcelDownloadButton buttonName="버튼1" fetchData={() => {}} />,
    );
    const buttonElement = screen.getByText('버튼1');
    expect(buttonElement).toBeInTheDocument();
  });

  it('파일 다운로드', async () => {
    const fetchData = jest.fn(() => {
      return data;
    });
    render(
      <excel.ExcelDownloadButton
        buttonName="버튼2"
        fileName="test.csv"
        headers={headers}
        fetchData={fetchData}
      />,
    );

    const buttonElement = screen.getByText('버튼2');
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });
  });

  /*  it("fetchData 값이 없는 경우 - 에러", () => {

    render(<excel.ExcelDownloadButton
      buttonName="버튼2"
      fileName='test.csv'
      headers={headers}
    />);
    const buttonElement = screen.getByText("버튼2")
    userEvent.click(buttonElement);


  });*/
});
