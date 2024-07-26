import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

it('useCounter', () => {
  //https://www.daleseo.com/react-hooks-testing-library/
  // const {count, increaseCount, decreaseCount}= renderHook(() => useCounter(0));
  const { result } = renderHook(() => useCounter(0));
  // expect(result.current[0]).toBe(0);
  act(() => result.current[1]());
  expect(result.current[0]).toBe(1);
  act(() => result.current[2]());
  expect(result.current[0]).toBe(0);
});
