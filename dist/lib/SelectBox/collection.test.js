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
import { Collection, useCollection } from './collection';
import { act, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import userEvent from '@testing-library/user-event';
const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn();
});
afterEach(() => {
  console.error = originalError;
});
test('useCollection 의 getItems 사용해서 총 갯수 확인', () => {
  const TestComponent = () => {
    const { getItems } = useCollection();
    // 컴포트가 렌더링되고
    // CollectionProvider가 itemMap을 값으로 채우기 충분한 시간필요해서 useEffect 사용
    useEffect(() => {
      const options = getItems();
      expect(options.length).toEqual(2);
    }, []);
    return React.createElement(React.Fragment, null);
  };
  render(
    React.createElement(
      Collection.Provider,
      null,
      React.createElement(Collection.Item, { index: 0, value: 1 }, 'title'),
      React.createElement(Collection.Item, { index: 1, value: 2 }, 'title'),
      React.createElement(TestComponent, null),
    ),
  );
});
test('useCollection 의 focusItem 사용해서 CSS 클래스를 확인', () => {
  const TestComponent = ({ target }) => {
    const { focusItem } = useCollection();
    useEffect(() => {
      focusItem(target);
    }, []);
    return React.createElement(React.Fragment, null);
  };
  render(
    React.createElement(
      Collection.Provider,
      null,
      React.createElement(Collection.Item, { index: 0, value: 1 }, 'title1'),
      React.createElement(Collection.Item, { index: 1, value: 2 }, 'title2'),
      React.createElement(TestComponent, { target: 2 }),
    ),
  );
  const item1 = screen.getByText('title1');
  expect(item1).not.toHaveClass('selected');
  const item2 = screen.getByText('title2');
  expect(item2).toHaveClass('selected');
});
test('useCollection 사용시 Collection.Provider 사용 안했을때', () => {
  const TestComponent = ({ target }) => {
    const { focusItem } = useCollection();
    useEffect(() => {
      focusItem(target);
    }, []);
    return React.createElement(React.Fragment, null);
  };
  expect(() => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(TestComponent, { target: 2 }),
      ),
    );
  }).toThrow(
    new Error(
      'useCollection 는 Collection.Provider 내부에서 사용되어야 합니다',
    ),
  );
});
test('Collection.Provider 사용 안했을때', () => {
  expect(() => {
    render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Collection.Item, { index: 0, value: 1 }, 'title1'),
        React.createElement(Collection.Item, { index: 1, value: 2 }, 'title2'),
      ),
    );
  }).toThrow(
    new Error(
      'CollectionItem 는 Collection.Provider 내부에서 사용되어야 합니다',
    ),
  );
});
describe('클릭 테스트', () => {
  it('item 한개 있을때 클릭 테스트', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      render(
        React.createElement(
          Collection.Provider,
          null,
          React.createElement(
            Collection.Item,
            { index: 0, value: 1, onSelectValue: () => undefined },
            'title1',
          ),
        ),
      );
      const item = screen.getByRole('listitem');
      expect(item).not.toHaveClass('selected');
      yield act(() => {
        userEvent.click(item);
        expect(item).toHaveClass('selected');
      });
    }));
  it('item 여러개 있을때 클릭 테스트', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      render(
        React.createElement(
          Collection.Provider,
          null,
          React.createElement(
            Collection.Item,
            { index: 0, value: 1, onSelectValue: () => undefined },
            'title1',
          ),
          React.createElement(
            Collection.Item,
            { index: 0, value: 1, onSelectValue: () => undefined },
            'title2',
          ),
        ),
      );
      const item = screen.getByText('title1');
      const item2 = screen.getByText('title2');
      yield act(() => {
        userEvent.click(item);
        expect(item).toHaveClass('selected');
        expect(item2).not.toHaveClass('selected');
      });
    }));
});
describe('키보드 이벤트 테스트', () => {
  it('onkeydown,onkeyup 클릭', () => {
    render(
      React.createElement(
        Collection.Provider,
        null,
        React.createElement(
          Collection.Item,
          { index: 0, value: 1, onSelectValue: () => undefined },
          'title1',
        ),
        React.createElement(
          Collection.Item,
          { index: 1, value: 2, onSelectValue: () => undefined },
          'title2',
        ),
      ),
    );
    const item1 = screen.getByText('title1');
    const item2 = screen.getByText('title2');
    act(() => {
      userEvent.click(item1);
    });
    expect(item1).toHaveFocus();
    act(() => {
      userEvent.keyboard('{arrowdown}');
    });
    expect(item2).toHaveFocus();
    act(() => {
      userEvent.keyboard('{arrowup}');
    });
    expect(item1).toHaveFocus();
  });
  it('Enter 클릭', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      render(
        React.createElement(
          Collection.Provider,
          null,
          React.createElement(
            Collection.Item,
            { index: 0, value: 1, onSelectValue: () => undefined },
            'title1',
          ),
          React.createElement(
            Collection.Item,
            { index: 1, value: 2, onSelectValue: () => undefined },
            'title2',
          ),
        ),
      );
      const item1 = screen.getByText('title1');
      act(() => {
        userEvent.click(item1);
        userEvent.keyboard('{enter}');
      });
      expect(item1).toHaveFocus();
    }));
});
