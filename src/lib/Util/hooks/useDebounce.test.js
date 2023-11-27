import { act, renderHook } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce 테스트', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('컴포넌트가 마운트 됐을 때 (처음 나타났을 때)- 최초 초기값 적용', () => {
    const initialValue = '123';
    const delay = 1000;

    const { result } = renderHook(() => useDebounce(initialValue, delay));

    expect(result.current).toBe(initialValue);
  });

  it('1초 딜레이 이후의 값 적용', () => {
    const initialValue = '123';
    const finalValue = '12';
    const delay = 1000; // 예: 1초 딜레이

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: initialValue, delay: delay } },
    );

    // 초기 값 확인
    expect(result.current).toBe(initialValue);

    // 값 변경 및 재랜더링
    act(() => {
      rerender({ value: finalValue });
    });

    expect(result.current).toBe(initialValue);

    // 타이머 진행
    act(() => {
      jest.advanceTimersByTime(delay);
    });

    // 딜레이 이후의 최종 값 확인
    expect(result.current).toBe(finalValue);
  });

  it('컴포넌트가 언마운트될 때(사라질때) 타임아웃을 지우고 초기 값이 유지되는지 확인', () => {
    const initialValue = '123';
    const delay = 1000; // 예: 1초 딜레이

    const { result, unmount } = renderHook(() =>
      useDebounce(initialValue, delay),
    );

    // 딜레이 이전에 컴포넌트 언마운트
    unmount();

    // 타이머 진행
    act(() => {
      jest.advanceTimersByTime(delay);
    });

    // 언마운트 후에는 초기 값 유지
    expect(result.current).toBe(initialValue);
  });
});
