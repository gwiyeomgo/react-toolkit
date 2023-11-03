import { render, screen } from '@testing-library/react';
import React from 'react';
import { CountdownTimer } from './countdownTimer';

//Jest: mocking console.error 처리
//https://stackoverflow.com/questions/44596915/jest-mocking-console-error-tests-fails
const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn()
  jest.useFakeTimers()
  //시간 mocking
  //https://www.daleseo.com/jest-date-mocking/
  const fakeDate = new Date(2023, 10, 3, 16, 57);
  jest.setSystemTime(fakeDate);
})

afterEach(() => {
  console.error = originalError;
  jest.useRealTimers()
})

describe('렌더링 테스트',()=>{
  it("targetTimer yyyyMMddHHmmss 형식이 아닐때",()=>{
    expect(() => {
      render(<>
        <CountdownTimer
          type={"suffix"}
          targetTime={124141}
          suffixList={['일']}
        />
      </>);
    }).toThrow( new Error('yyyyMMddHHmmss 형식이 아닙니다.'));


  });

  it("targetTime 과거",()=>{
    expect(() => {
      render(<>
        <CountdownTimer
          targetTime={20201103100000}
        />
      </>);
    }).toThrow( new Error('목표 시간이 이미 지났습니다.'));
  });


  it("type  none 인 경우 - 렌더링 (성공)",()=>{
    render(<>
      <CountdownTimer
        type="none"
        keyList={["hours", "minutes", "seconds"]}
        targetTime={20231224120000}
        fontSize={20}
      />
    </>);

    const textElements = screen.queryAllByText(":");
    expect(textElements.length).toEqual(0);
  });

  it("type  default 인 경우 - 렌더링 (성공)",()=>{
    render(
      <CountdownTimer
        targetTime={20231203100000}
        type="default"
      />
    );
    const textElements = screen.queryAllByText(":");
    expect(textElements.length).toEqual(3);
  });

  it("type  suffix 인 경우 - 렌더링 (성공)",()=>{
    render(<>
      <CountdownTimer
        type={"suffix"}
        targetTime={20231224120000}
        suffixList={['일']}
      />
    </>);
    const textElement = screen.queryAllByText('0일');
    expect(textElement.length).toEqual(1);
  });

})

