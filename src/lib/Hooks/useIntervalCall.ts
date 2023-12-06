import { useEffect, useRef } from 'react';

export default function useIntervalCall(
  callback: VoidFunction,
  delay?: number,
) {
  const savedCallback = useRef<VoidFunction | null>(null);

  useEffect(() => {
    if (typeof callback === 'function') {
      savedCallback.current = callback;
    } else {
      throw new Error(
        `실행 함수를 입력해 주세요 (callback:${typeof callback})`,
      );
    }
  }, [callback]);

  useEffect(() => {
    if (delay === 0 || delay === undefined || delay === null) {
      throw new Error(`delay 값을 입력해 주세요.`);
    }
    const intervalId = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay]);
}
