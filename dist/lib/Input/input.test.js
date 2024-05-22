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
import { act, render } from '@testing-library/react';
import { Input } from './input';
import React, { useState } from 'react';
import { fireEvent } from '@storybook/test';
it('Input 렌더링', () => {
  render(React.createElement(Input, null));
});
//onChange
it('onChange()', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const App = () => {
      const [data, setData] = useState('init');
      return React.createElement(Input, {
        value: data,
        onChange: (e) => {
          setData(e.target.value);
        },
      });
    };
    const { container, unmount } = render(React.createElement(App, null));
    yield act(() => {
      var _a, _b;
      (_a = container.querySelector('input')) === null || _a === void 0
        ? void 0
        : _a.focus();
      const target = {};
      target.value = '111';
      //TODO warning  Forbidden non-null assertion ->
      fireEvent.change(container.querySelector('input'), {
        target: target,
      });
      expect(
        (_b = container.querySelector('input')) === null || _b === void 0
          ? void 0
          : _b.value,
      ).toEqual('111');
      unmount();
    });
  }));
it('set mouse cursor position', () => {
  var _a, _b, _c;
  //사용자가 "11111"이라는 텍스트를 입력한 후에
  // 커서가 마지막에 위치하면
  // 마우스나 키보드로 선택을 확장하지 않고 그대로 두었을 때
  const value = '11111';
  const valLength = value.length;
  const ref = React.createRef();
  const { container } = render(
    React.createElement(Input, { ref: ref, value: value }),
  );
  (_a = ref.current) === null || _a === void 0
    ? void 0
    : _a.setSelectionRange(valLength, valLength);
  expect(
    (_b = container.querySelector('input')) === null || _b === void 0
      ? void 0
      : _b.selectionStart,
  ).toEqual(5);
  expect(
    (_c = container.querySelector('input')) === null || _c === void 0
      ? void 0
      : _c.selectionEnd,
  ).toEqual(5);
});
//select
it('select()', () => {
  var _a;
  const ref = React.createRef();
  render(React.createElement(Input, { ref: ref }));
  (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
});
//blur
it('blur()', () => {
  var _a;
  const ref = React.createRef();
  render(React.createElement(Input, { ref: ref }));
  (_a = ref.current) === null || _a === void 0 ? void 0 : _a.blur();
});
//clear
it('clear()', () => {
  var _a;
  const ref = React.createRef();
  render(React.createElement(Input, { ref: ref }));
  (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clear();
});
