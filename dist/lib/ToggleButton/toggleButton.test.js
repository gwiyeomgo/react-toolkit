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
import { ToggleButton } from './toggleButton';
import React from 'react';
import userEvent from '@testing-library/user-event';
it('ToggleButton left 속성 적용 확인', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(React.createElement(ToggleButton, { toggled: false }));
    const toggleElement = screen.getByRole('button');
    yield act(() => {
      userEvent.click(toggleElement);
    });
    yield waitFor(() => {
      // button 요소의 style 속성 가져오기
      const buttonStyles = window.getComputedStyle(toggleElement);
      // left 속성의 값 가져오기
      const leftValue = buttonStyles.getPropertyValue('left');
      // left 속성이 calc(100% - 2px)인지 확인
      expect(leftValue).toBe('calc(100% - 2px)');
    });
  }));
it('ToggleButton transform 속성 적용 확인', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(React.createElement(ToggleButton, { toggled: false }));
    const toggleElement = screen.getByRole('button');
    yield act(() => {
      userEvent.click(toggleElement);
    });
    yield waitFor(() => {
      // button 요소의 style 속성 가져오기
      const buttonStyles = window.getComputedStyle(toggleElement);
      // transform 속성의 값 가져오기
      const transformValue = buttonStyles.getPropertyValue('transform');
      // transform 속성이 translateX(-100%)인지 확인
      expect(transformValue).toBe('translateX(-100%)');
    });
  }));
