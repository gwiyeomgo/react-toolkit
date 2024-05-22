import { useEffect, useState } from 'react';
/**
 * value나 delay가 변경시  useEffect가 실행 -> 딜레이가 새로 설정됨
 * 또 값이 변경되어 useEffect이 호출될때 이전에 예약된 타임아웃을 취소하여 실행되지 않도록함  = clearTimeout
 * setTimeout은 비동기적으로 동작하며 일정 시간이 지난 후에 어떤 동작을 수행하거나 대기 시간을 설정(timeoutId = 실행이 예약된 타임아웃을 식별)
 *
 *
 * //https://dev.to/manishkc104/debounce-input-in-react-3726
 * //https://rkgml981105.medium.com/debounce-onchange-input-event-with-react-9c274118b98c
 *
 * @param {string} value - 입력값
 * @param {number} delay - 지연 시간 (단위:밀리초)(지연시간 기본값: 1초)(1초 = 1000밀리초)
 * @returns {string} - 디바운스된 결과 :마지막에 입력된 값
 */
export function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);
  return debounceValue;
}
