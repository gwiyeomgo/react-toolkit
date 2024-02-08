import { act, renderHook } from '@testing-library/react';

import { useNotificationTimer } from '../hooks/useNotificationTimer';
beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});
it('useNotificationTimer', () => {
  //https://www.daleseo.com/react-hooks-testing-library/
  const list = ['1', '2', '3'];
  const delay = 100;
  const { result } = renderHook(() => useNotificationTimer(list, delay));

  // 초기 값 확인
  expect(result.current).toStrictEqual([]);

  // 타이머 진행100
  act(() => {
    jest.advanceTimersByTime(delay);
  });
  expect(result.current).toStrictEqual(['1']);
  // 타이머 진행200
  act(() => {
    jest.advanceTimersByTime(delay);
  });
  expect(result.current).toStrictEqual(['1', '2']);
});

it('useNotificationTimer - 다시 랜더링', () => {
  const initialList = ['a'];
  const delay = 100;
  const { result, rerender } = renderHook(
    ({ list, delay }) => useNotificationTimer(list, delay),
    {
      initialProps: { list: initialList, delay: delay },
    },
  );

  expect(result.current).toStrictEqual([]);
  // 타이머 진행100
  act(() => {
    jest.advanceTimersByTime(delay);
  });
  expect(result.current).toStrictEqual(['a']);

  // 값 변경 및 재랜더링
  act(() => {
    rerender({ list: ['b', 'c'], delay: delay });
  });
  expect(result.current).toStrictEqual([]);
  // 타이머 진행100
  act(() => {
    jest.advanceTimersByTime(delay);
  });
  expect(result.current).toStrictEqual(['b']);
});
