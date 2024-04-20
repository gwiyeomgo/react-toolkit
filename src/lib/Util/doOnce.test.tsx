import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { doOnce, doOnceWithDelay } from './doOnce';
import userEvent from '@testing-library/user-event';

it('단 한번만 호출', async () => {
  const testFn = jest.fn();

  render(<button onClick={doOnce(testFn)}>한번만호출되는버튼</button>);

  const button = screen.getByRole('button', {
    name: '한번만호출되는버튼',
  });

  await act(() => {
    expect(testFn).toHaveBeenCalledTimes(0);
  });

  await act(() => {
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
  });
  await act(() => {
    expect(testFn).toHaveBeenCalledTimes(1);
  });
});
describe('doOnceWithDelay 테스트', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('단 한번만 호출,일정 시간 지나면 다시 클릭 가능', async () => {
    const testFn2 = jest.fn();
    const delay = 2000;
    render(
      <button onClick={doOnceWithDelay(testFn2, delay)}>
        2초뒤에클릭가능
      </button>,
    );

    const button = screen.getByRole('button', {
      name: '2초뒤에클릭가능',
    });

    await act(() => {
      expect(testFn2).toHaveBeenCalledTimes(0);
    });

    await act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });

    await act(() => {
      expect(testFn2).toHaveBeenCalledTimes(1);
    });
    act(() => {
      jest.advanceTimersByTime(delay); // 타이머 진행 (2초)
    });
    await act(() => {
      expect(testFn2).toHaveBeenCalledTimes(1);
    });
  });
});
