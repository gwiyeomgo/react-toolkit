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
import DisplayImage from './displayImage';
import userEvent from '@testing-library/user-event';
it('DisplayImage', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const remove = jest.fn();
    render(React.createElement(DisplayImage, { src: '', remove: remove }));
    const buttonElement = screen.getByRole('button');
    yield act(() => {
      userEvent.click(buttonElement);
    });
    expect(remove).toHaveBeenCalledTimes(1);
  }));
