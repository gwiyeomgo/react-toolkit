import {   render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExcelDownloadButton } from './excelDownloadButton';
import { CSVLink } from 'react-csv';
import { forwardRef } from 'react';

jest.mock('react-csv', () => ({
  CSVLink: jest.fn(),
}));

const headers = [
  { label: "A", key: "a" },
  { label: "B", key: "b" },
];
const data =[{a:"aaa",b:"bbb"}]



it("버튼 렌더링 확인",()=> {
  render(<ExcelDownloadButton buttonName="버튼1"/>);
  const buttonElement = screen.getByText("버튼1")
  expect(buttonElement).toBeInTheDocument();
});

it("파일 다운로드",async () => {
  const fetchData = jest.fn(()=>{
    return data
  });

  render(<ExcelDownloadButton
    buttonName="버튼2"
    fileName='test.csv'
    headers={headers}
    fetchData={fetchData} />);

  const buttonElement = screen.getByText("버튼2")

  userEvent.click(buttonElement);

  expect(fetchData).toHaveBeenCalled()

 /* await waitFor(() => {
    //CSVLink 컴포넌트를 props 값 확인
    expect(CSVLink).toHaveBeenCalledWith(
      {
        data: data,
        headers: headers,
        filename: 'test.csv',
        target: "_blank"
      },
      {"current": null}
    );
  });*/

});