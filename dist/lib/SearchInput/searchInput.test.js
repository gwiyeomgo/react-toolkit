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
import { SearchInput } from './searchInput';
import userEvent from '@testing-library/user-event';
it('SearchInput 렌더링', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const delay = 1000;
    const onClick = jest.fn();
    render(
      React.createElement(SearchInput, {
        onClickSearch: onClick,
        delay: delay,
      }),
    );
    const inputElement = screen.getByRole('input');
    const button = screen.getByRole('button', { name: 'Search' });
    //메세지 입력
    yield act(() => {
      userEvent.type(inputElement, 'SearchInput테스트');
    });
    // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
    yield waitFor(() => {
      const inputElement = screen.getByRole('input');
      expect(inputElement).toHaveValue('SearchInput테스트');
    });
    //검색 버튼 클릭 1번
    yield act(() => {
      userEvent.click(button);
    });
    // 클리어됨
    yield waitFor(() => {
      const inputElement = screen.getByRole('input');
      expect(inputElement).toHaveValue('');
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  }));
