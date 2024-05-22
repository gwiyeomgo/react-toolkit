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
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Button } from './button';
import userEvent from '@testing-library/user-event';
//import userEvent from '@testing-library/user-event';
//error  Require statement not part of import statement
//'@typescript-eslint/no-var-requires': 0,
describe('기본 버튼 color 와 type 이 적용되었는지 테스트', () => {
  it('color 지정시 ', () => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { danger: true }, 'zzz'),
      ),
    );
    const buttonElement = screen.getByRole('button'); //class="btn danger"
    //classNaem 체크 방법
    //https://stackoverflow.com/questions/53389956/how-to-test-a-classname-with-the-jest-and-react-testing-library
    expect(buttonElement.classList.contains('danger')).toBe(true);
    expect(buttonElement).toHaveClass('danger');
  });
  it('type 지정시 ', () => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { type: 'secondary' }),
      ),
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('secondary');
  });
  it('버튼이 disabled 인 경우 버튼을 클릭한 후에 onClick 함수가 호출되지 않음 ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const onClick = jest.fn();
      render(
        React.createElement(
          React.Fragment,
          null,
          React.createElement(Button, { disabled: true, onClick: onClick }),
        ),
      );
      const buttonElement = screen.getByRole('button');
      //disabled
      expect(buttonElement).toBeDisabled();
      yield act(() => {
        userEvent.click(buttonElement);
      });
      expect(onClick).toHaveBeenCalledTimes(0);
    }));
  it('loading true 인 경우 버튼을 클릭한 후에 onClick 함수가 호출되지 않음 ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const onClickMock = jest.fn();
      render(
        React.createElement(
          React.Fragment,
          null,
          React.createElement(Button, { loading: true, onClick: onClickMock }),
        ),
      );
      const buttonElement = screen.getByRole('button');
      yield act(() => {
        userEvent.click(buttonElement);
      });
      expect(onClickMock).toHaveBeenCalledTimes(0);
    }));
});
