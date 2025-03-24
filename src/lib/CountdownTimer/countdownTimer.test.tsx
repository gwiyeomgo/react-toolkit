import { render, screen } from '@testing-library/react';
import React from 'react';
import { CountdownTimer } from './countdownTimer';

//Jest: mocking console.error 처리
//https://stackoverflow.com/questions/44596915/jest-mocking-console-error-tests-fails

describe('실패 ', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.spyOn(console, 'error').mockRestore();
  });

  it('targetTimer yyyyMMddHHmmss 형식이 아닐때', () => {
    expect(() => {
      render(
        <>
          <CountdownTimer targetTime={'124141'} />
        </>,
      );
    }).toThrow(new Error('yyyyMMddHHmmss 형식이 아닙니다.'));
  });
});
describe('렌더링 테스트', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    //시간 mocking
    //https://www.daleseo.com/jest-date-mocking/
    const fakeDate = new Date(2023, 10, 3, 16, 57);
    jest.setSystemTime(fakeDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('type  none 인 경우 - 렌더링 (성공)', () => {
    render(
      <>
        <CountdownTimer
          type="none"
          targetTime={'20231224120000'}
          fontSize={20}
        />
      </>,
    );

    const textElements = screen.queryAllByText(':');
    expect(textElements.length).toEqual(0);
  });

  it('type  default 인 경우 - 렌더링 (성공)', () => {
    render(<CountdownTimer targetTime={'20231203100000'} type="default" />);
    const textElements = screen.queryAllByText(':');
    expect(textElements.length).toEqual(3);
  });

  it('type  suffix 인 경우 - 렌더링 (성공)', () => {
    render(
      <>
        <CountdownTimer type={'suffix'} targetTime={'20231224120000'} />
      </>,
    );
    const textElement = screen.queryAllByText('days');
    expect(textElement.length).toEqual(1);
  });

  it('targetTime 과거이거나 현재면 00:00 출력 (성공)', () => {
    expect(() => {
      render(
        <>
          <CountdownTimer type="default" targetTime={'20201103100000'} />
        </>,
      );
    });

    const textElement = screen.queryAllByText('days');
    expect(textElement.length).toEqual(0);
  });
});
