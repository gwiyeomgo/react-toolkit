import { useState } from 'react';

// useCounter 훅의 반환 타입 정의
type UseCounterReturnType = [number, () => void, () => void];

export function useCounter(initialValue: number): UseCounterReturnType {
  const [count, setCount] = useState(initialValue);

  const increaseCount = (): void => setCount((count) => count + 1);
  const decreaseCount = (): void => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}
