import type { ReactElement } from 'react';
import React, { createRef, StrictMode } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { act, render } from '@testing-library/react';

const globalTimeout = global.setTimeout;

/***
 주어진 시간(ms) 동안 기다리는 비동기 함수입니다.
 */
export const sleep = async (timeout = 0) => {
  await act(async () => {
    await new Promise((resolve) => {
      globalTimeout(resolve, timeout);
    });
  });
};

/***
 StrictMode로 감싼 컴포넌트를 렌더링하는 함수
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: StrictMode, ...options });

/**
 React hook을 테스트하기 위해 결과를 참조로 반환하는 함수
 */
export function renderHook<T>(func: () => T): { result: React.RefObject<T> } {
  const result = createRef<T>();

  const Demo: React.FC = () => {
    (result as any).current = func();

    return null;
  };

  customRender(<Demo />);

  return { result };
}

/**
 * Wait for a time delay. Will wait `advanceTime * times` ms.
 * 주어진 시간만큼 Jest의 가상 타이머를 여러 번 진행시키는 함수
 * waitFakeTimer:
 * @param advanceTime Default 1000
 * @param times Default 20
 */
export async function waitFakeTimer(advanceTime = 1000, times = 20) {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {
      await Promise.resolve();

      if (advanceTime > 0) {
        jest.advanceTimersByTime(advanceTime);
      } else {
        jest.runAllTimers();
      }
    });
  }
}

export * from '@testing-library/react';
