import React from 'react';
import { render, screen, act } from '@testing-library/react';
import {
  SearchConditionKeys,
  SearchConditionsProps,
  SearchConditionsProvider,
  useSearchConditions,
} from './searchConditions';
import userEvent from '@testing-library/user-event';

const TestPage = (props: SearchConditionsProps) => {
  const setSearchCondition = (key: SearchConditionKeys, value: any) => {
    setValue(key, value);
  };

  const removeSearchCondition = (key: SearchConditionKeys) => {
    deleteValue(key);
  };
  const { searchConditions, setValue, deleteValue } = useSearchConditions();
  return (
    <div>
      <div role="textbox">{searchConditions && searchConditions.pageSize}</div>
      <>{props.pageName}</>
      <button
        role="button"
        onClick={() => {
          removeSearchCondition('pageSize');
        }}
      >
        페이지 크기 제거
      </button>
      <button
        name="add"
        role="button"
        onClick={() => {
          setSearchCondition('pageSize', 20);
        }}
      >
        페이지 크기 추가
      </button>
    </div>
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
      <SearchConditionsProvider pageName={'페이지1'}>
        <TestPage pageName={'페이지1'} />
      </SearchConditionsProvider>,
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
  it('SearchConditionsProvider 에 조건 추가,삭제 (성공)', async () => {
    render(
      <SearchConditionsProvider pageName={'1'}>
        <TestPage pageName={'1'} />
      </SearchConditionsProvider>,
    );

    const text = screen.getByRole('textbox');
    expect(text).toHaveTextContent('10');

    const removeButton = screen.getByRole('button', {
      name: '페이지 크기 제거',
    });
    const addButton = screen.getByRole('button', {
      name: '페이지 크기 추가',
    });

    await act(() => {
      userEvent.click(removeButton);
    });

    const text2 = screen.getByRole('textbox');
    expect(text2).not.toHaveTextContent('10');

    await act(() => {
      userEvent.click(addButton);
    });

    const text3 = screen.getByRole('textbox');
    expect(text3).toHaveTextContent('20');
  });
  it('SearchConditionsProvider 에 pageName 이 없는 경우 (실패)', () => {
    expect(() => {
      render(
        <SearchConditionsProvider>
          <TestPage pageName={'페이지2'} />
        </SearchConditionsProvider>,
      );
    }).toThrow(
      new Error(
        'SearchConditionsProvider 에 pageName props 값을 지정해 주세요.',
      ),
    );
  });
  it('useSearchConditions 를 SearchConditionsProvider 로 감싸지 않고 사용한 경우 (실패)', () => {
    expect(() => {
      render(<TestPage pageName={'페이지3'} />);
    }).toThrow(
      new Error(
        'useSearchConditions 는 SearchConditionsProvider 내부에서 사용되어야 합니다',
      ),
    );
  });
});
