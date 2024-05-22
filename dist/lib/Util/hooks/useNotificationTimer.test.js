var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { act, renderHook, waitFor } from '@testing-library/react';
import { useNotificationTimer } from '../hooks/useNotificationTimer';
beforeAll(() => {
  jest.useFakeTimers();
});
afterAll(() => {
  jest.useRealTimers();
});
it('useNotificationTimer', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    //https://www.daleseo.com/react-hooks-testing-library/
    const list = ['1', '2'];
    const delay = 100;
    const { result } = renderHook(() => useNotificationTimer(list, delay));
    // 초기 값 확인
    expect(result.current).toStrictEqual([]);
    // 타이머 진행100
    yield act(() => {
      jest.advanceTimersByTime(delay);
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual(['1']);
    });
    // 타이머 진행200
    yield act(() => {
      jest.advanceTimersByTime(delay);
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual(['1', '2']);
    });
    // 클리어
    yield act(() => {
      jest.advanceTimersByTime(delay);
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual([]);
    });
  }));
it('useNotificationTimer - 다시 랜더링', () =>
  __awaiter(void 0, void 0, void 0, function* () {
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
    yield act(() => {
      jest.advanceTimersByTime(delay);
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual(['a']);
    });
    // 값 변경 및 재랜더링
    act(() => {
      rerender({ list: ['b', 'c'], delay: delay });
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual([]);
    });
    // 타이머 진행100
    act(() => {
      jest.advanceTimersByTime(delay);
    });
    yield waitFor(() => {
      expect(result.current).toStrictEqual(['b']);
    });
  }));
