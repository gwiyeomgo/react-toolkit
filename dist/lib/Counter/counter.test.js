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
import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Counter } from './counter';
import userEvent from '@testing-library/user-event';
it('Counter 렌더링', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const mock = jest.fn();
    render(React.createElement(Counter, { getDebouncedResult: mock }));
    // "button" 역할을 가진 모든 요소를 찾음
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    yield act(() => {
      // + 버튼 클릭
      userEvent.click(buttons[0]);
    });
    // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
    yield waitFor(() => {
      const inputElement = screen.getByRole('input');
      expect(inputElement).toHaveValue('1');
    });
    yield act(() => {
      // - 버튼 클릭
      userEvent.click(buttons[1]);
    });
    // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
    yield waitFor(() => {
      const inputElement = screen.getByRole('input');
      expect(inputElement).toHaveValue('0');
    });
  }));
