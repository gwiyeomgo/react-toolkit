import React from 'react';
import { act } from '@testing-library/react';
import {renderHook } from '@testing-library/react';
import useIntervalCall from './useIntervalCall';


describe('useDebounce 테스트', () => {
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn()
    jest.useFakeTimers();
  });

  afterAll(() => {
    console.error = originalError;
    jest.useRealTimers();
  });

  it('useIntervalCall에서 callback을 2초간 실행 - 호출 횟수 2회',  () => {
    const callback = jest.fn();
    const delay = 1000;
    let hook =  renderHook(() => useIntervalCall(callback, delay))
     act( () => {
      jest.advanceTimersByTime(delay); // 타이머 진행 (1초)
      jest.advanceTimersByTime(delay); // 타이머 진행 (1초)
    });
    //https://stackoverflow.com/questions/73150220/cannot-test-custom-hooks-with-react-18-and-renderhook-from-testing-library-react
    //https://github.com/testing-library/react-hooks-testing-library

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('callback 값이 함수가 아닌 경우',  () => {
    const callback = []
    const delay = 1000;

    expect(() => {
      renderHook(() => useIntervalCall(callback, delay));
    }).toThrow( new Error('실행 함수를 입력해 주세요 (callback:object)'));

  });
  it('useInte',  () => {
    const callback = jest.fn()

    expect(() => {
      renderHook(() => useIntervalCall(callback));
    }).toThrow( new Error('delay 값을 입력해 주세요.'));

    expect(() => {
      renderHook(() => useIntervalCall(callback,undefined));
    }).toThrow( new Error('delay 값을 입력해 주세요.'));

    expect(() => {
      renderHook(() => useIntervalCall(callback,0));
    }).toThrow( new Error('delay 값을 입력해 주세요.'));

    expect(() => {
      renderHook(() => useIntervalCall(callback,null));
    }).toThrow( new Error('delay 값을 입력해 주세요.'));

  });
});
