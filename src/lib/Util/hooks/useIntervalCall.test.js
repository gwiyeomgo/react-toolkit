import React from 'react';
import { act, waitFor } from '@testing-library/react';
import {renderHook } from '@testing-library/react';
import useIntervalCall from './useIntervalCall';



test('useIntervalCall에서 callback을 2초간 실행 - 호출 횟수 2회',  async() => {
  jest.useFakeTimers();

  const callback = jest.fn();
  const delay = 1000;
  let hook;
   await act(async () => {
    hook =  renderHook(() => useIntervalCall(callback, delay))
   });
   //https://stackoverflow.com/questions/73150220/cannot-test-custom-hooks-with-react-18-and-renderhook-from-testing-library-react
   //https://github.com/testing-library/react-hooks-testing-library

   jest.advanceTimersByTime(delay); // 타이머 진행 (1초)
   jest.advanceTimersByTime(delay); // 타이머 진행 (1초)

   expect(callback).toHaveBeenCalledTimes(2);

    jest.useRealTimers();
});


