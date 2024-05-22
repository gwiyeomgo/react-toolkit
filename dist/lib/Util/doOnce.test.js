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
import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { doOnce, doOnceWithDelay } from './doOnce';
import userEvent from '@testing-library/user-event';
it('단 한번만 호출', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const testFn = jest.fn();
    render(
      React.createElement(
        'button',
        { onClick: doOnce(testFn) },
        '\uD55C\uBC88\uB9CC\uD638\uCD9C\uB418\uB294\uBC84\uD2BC',
      ),
    );
    const button = screen.getByRole('button', {
      name: '한번만호출되는버튼',
    });
    yield act(() => {
      expect(testFn).toHaveBeenCalledTimes(0);
    });
    yield act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });
    yield act(() => {
      expect(testFn).toHaveBeenCalledTimes(1);
    });
  }));
describe('doOnceWithDelay 테스트', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('단 한번만 호출,일정 시간 지나면 다시 클릭 가능', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const testFn2 = jest.fn();
      const delay = 2000;
      render(
        React.createElement(
          'button',
          { onClick: doOnceWithDelay(testFn2, delay) },
          '2\uCD08\uB4A4\uC5D0\uD074\uB9AD\uAC00\uB2A5',
        ),
      );
      const button = screen.getByRole('button', {
        name: '2초뒤에클릭가능',
      });
      yield act(() => {
        expect(testFn2).toHaveBeenCalledTimes(0);
      });
      yield act(() => {
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
      });
      yield act(() => {
        expect(testFn2).toHaveBeenCalledTimes(1);
      });
      act(() => {
        jest.advanceTimersByTime(delay); // 타이머 진행 (2초)
      });
      yield act(() => {
        expect(testFn2).toHaveBeenCalledTimes(1);
      });
    }));
});
