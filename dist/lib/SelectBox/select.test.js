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
import { Select } from './select';
import userEvent from '@testing-library/user-event';
const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn();
});
afterEach(() => {
  console.error = originalError;
});
test('렌더링 완료 (성공)', () => {
  render(
    React.createElement(
      Select.Provider,
      { defaultValue: 'a' },
      React.createElement(Select.Trigger, null),
      React.createElement(Select.OptionList, null, (context, index) =>
        React.createElement(
          Select.Option,
          { context: context, value: index, index: index },
          'Option ',
          index,
        ),
      ),
    ),
  );
});
test('SelectBox.Trigger(combobox) 를 클릭했을때 목록이 열리는가? (성공)', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    render(
      React.createElement(
        Select.Provider,
        { defaultValue: 'a' },
        React.createElement(Select.Trigger, null),
        React.createElement(
          Select.OptionList,
          null,
          React.createElement(
            Select.Option,
            { value: 'a', index: 0 },
            'Option 1',
          ),
          React.createElement(
            Select.Option,
            { value: 'b', index: 1 },
            'Option 2',
          ),
          React.createElement(
            Select.Option,
            { value: 'c', index: 2 },
            'Option 3',
          ),
        ),
      ),
    );
    const select = screen.getByRole('combobox', {
      expanded: false,
    });
    expect(select).toHaveAttribute('aria-expanded', 'false');
    yield act(() => {
      userEvent.click(select);
    });
    expect(select).toHaveAttribute('aria-expanded', 'true');
  }));
it('SelectBox.Provider 사용 안했을때', () => {
  expect(() => {
    render(
      React.createElement(
        Select.OptionList,
        null,
        React.createElement(
          Select.Option,
          { value: 'a', index: 0 },
          'Option 1',
        ),
        React.createElement(
          Select.Option,
          { value: 'b', index: 1 },
          'Option 2',
        ),
        React.createElement(
          Select.Option,
          { value: 'c', index: 2 },
          'Option 3',
        ),
      ),
    );
  }).toThrow(
    new Error('SelectContext은 SelectBox.Provider 내에서 사용되어야 합니다'),
  );
});
