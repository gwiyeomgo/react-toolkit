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
import { render, screen, act } from '@testing-library/react';
import {
  SearchConditionsProvider,
  useSearchConditions,
} from './searchConditions';
import userEvent from '@testing-library/user-event';
const TestPage = (props) => {
  const setSearchCondition = (key, value) => {
    setValue(key, value);
  };
  const removeSearchCondition = (key) => {
    deleteValue(key);
  };
  const { searchConditions, setValue, deleteValue } = useSearchConditions();
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { role: 'textbox' },
      searchConditions && searchConditions.pageSize,
    ),
    React.createElement(React.Fragment, null, props.pageName),
    React.createElement(
      'button',
      {
        role: 'button',
        onClick: () => {
          removeSearchCondition('pageSize');
        },
      },
      '\uD398\uC774\uC9C0 \uD06C\uAE30 \uC81C\uAC70',
    ),
    React.createElement(
      'button',
      {
        name: 'add',
        role: 'button',
        onClick: () => {
          setSearchCondition('pageSize', 20);
        },
      },
      '\uD398\uC774\uC9C0 \uD06C\uAE30 \uCD94\uAC00',
    ),
  );
};
const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn();
});
afterEach(() => {
  console.error = originalError;
});
describe('SearchConditionsProvider test', () => {
  it('SearchConditionsProvider 에 렌더링 완료 (성공)', () => {
    render(
      React.createElement(
        SearchConditionsProvider,
        { pageName: '페이지1' },
        React.createElement(TestPage, { pageName: '페이지1' }),
      ),
    );
    const text = screen.getByRole('textbox');
    const removeButton = screen.getByRole('button', {
      name: '페이지 크기 제거',
    });
    const addButton = screen.getByRole('button', {
      name: '페이지 크기 추가',
    });
    expect(text).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  it('SearchConditionsProvider 에 조건 추가,삭제 (성공)', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      render(
        React.createElement(
          SearchConditionsProvider,
          { pageName: '1' },
          React.createElement(TestPage, { pageName: '1' }),
        ),
      );
      const text = screen.getByRole('textbox');
      expect(text).toHaveTextContent('10');
      const removeButton = screen.getByRole('button', {
        name: '페이지 크기 제거',
      });
      const addButton = screen.getByRole('button', {
        name: '페이지 크기 추가',
      });
      yield act(() => {
        userEvent.click(removeButton);
      });
      const text2 = screen.getByRole('textbox');
      expect(text2).not.toHaveTextContent('10');
      yield act(() => {
        userEvent.click(addButton);
      });
      const text3 = screen.getByRole('textbox');
      expect(text3).toHaveTextContent('20');
    }));
  it('SearchConditionsProvider 에 pageName 이 없는 경우 (실패)', () => {
    expect(() => {
      render(
        React.createElement(
          SearchConditionsProvider,
          null,
          React.createElement(TestPage, { pageName: '페이지2' }),
        ),
      );
    }).toThrow(
      new Error(
        'SearchConditionsProvider 에 pageName props 값을 지정해 주세요.',
      ),
    );
  });
  it('useSearchConditions 를 SearchConditionsProvider 로 감싸지 않고 사용한 경우 (실패)', () => {
    expect(() => {
      render(React.createElement(TestPage, { pageName: '페이지3' }));
    }).toThrow(
      new Error(
        'useSearchConditions 는 SearchConditionsProvider 내부에서 사용되어야 합니다',
      ),
    );
  });
});
