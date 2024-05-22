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
import { render, waitFor, screen, act } from '@testing-library/react';
import { Icon } from './icon';
import { icons } from './icons';
import React from 'react';
describe('<Icon />', () => {
  // it.each 로 테스트 케이스를 반복
  it.each(Object.keys(icons))(
    'renders correct %s icon without violations',
    (iconName) =>
      __awaiter(void 0, void 0, void 0, function* () {
        render(React.createElement(Icon, { icon: iconName }));
        // act 함수 내에서 비동기 작업이 실행되도록 수정
        yield act(() =>
          __awaiter(void 0, void 0, void 0, function* () {
            const iconElement = screen.getByRole('img');
            // 비동기 작업을 대기하고, 특정 조건이 충족될 때까지 기다린다.
            yield waitFor(() => {
              expect(iconElement).toHaveAttribute('aria-label', iconName);
            });
          }),
        );
      }),
  );
});
