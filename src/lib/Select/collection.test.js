import React from 'react';
import { Collection, useCollection } from './collection';
import { render, screen } from '@testing-library/react';
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
    return;
  };
  render(
    <Collection.Provider>
      <Collection.Item index={0} value={1}>
        {'title'}
      </Collection.Item>
      <Collection.Item index={1} value={2}>
        {'title'}
      </Collection.Item>
      <TestComponent />
    </Collection.Provider>,
  );
});
test('useCollection 의 focusItem 사용해서 CSS 클래스를 확인', () => {
  const TestComponent = ({ target }) => {
    const { focusItem } = useCollection();
    useEffect(() => {
      focusItem(target);
    }, []);
    return;
  };
  render(
    <Collection.Provider>
      <Collection.Item index={0} value={1}>
        {'title1'}
      </Collection.Item>
      <Collection.Item index={1} value={2}>
        {'title2'}
      </Collection.Item>
      <TestComponent target={2} />
    </Collection.Provider>,
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
    return;
  };

  expect(() => {
    render(
      <>
        <TestComponent target={2} />
      </>,
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
      <>
        <Collection.Item index={0} value={1}>
          {'title1'}
        </Collection.Item>
        <Collection.Item index={1} value={2}>
          {'title2'}
        </Collection.Item>
      </>,
    );
  }).toThrow(
    new Error(
      'CollectionItem 는 Collection.Provider 내부에서 사용되어야 합니다',
    ),
  );
});

describe('클릭 테스트', () => {
  it('item 한개 있을때 클릭 테스트', async () => {
    render(
      <Collection.Provider>
        <Collection.Item index={0} value={1} onSelectValue={() => {}}>
          {'title1'}
        </Collection.Item>
      </Collection.Provider>,
    );

    const item = screen.getByRole('listitem');
    expect(item).not.toHaveClass('selected');
    await userEvent.click(item);
    expect(item).toHaveClass('selected');
  });
  it('item 여러개 있을때 클릭 테스트', async () => {
    render(
      <Collection.Provider>
        <Collection.Item index={0} value={1} onSelectValue={() => {}}>
          {'title1'}
        </Collection.Item>
        <Collection.Item index={0} value={1} onSelectValue={() => {}}>
          {'title2'}
        </Collection.Item>
      </Collection.Provider>,
    );

    const item = screen.getByText('title1');
    const item2 = screen.getByText('title2');
    await userEvent.click(item);
    expect(item).toHaveClass('selected');
    expect(item2).not.toHaveClass('selected');
  });
});

describe('키보드 이벤트 테스트', () => {
  it('onkeydown,onkeyup 클릭', () => {
    render(
      <Collection.Provider>
        <Collection.Item index={0} value={1} onSelectValue={() => {}}>
          {'title1'}
        </Collection.Item>
        <Collection.Item index={1} value={2} onSelectValue={() => {}}>
          {'title2'}
        </Collection.Item>
      </Collection.Provider>,
    );

    const item1 = screen.getByText('title1');
    const item2 = screen.getByText('title2');
    userEvent.click(item1);
    expect(item1).toHaveFocus();
    userEvent.keyboard('{arrowdown}');
    expect(item2).toHaveFocus();
    userEvent.keyboard('{arrowup}');
    expect(item1).toHaveFocus();
  });
  it('Enter 클릭', async () => {
    render(
      <Collection.Provider>
        <Collection.Item index={0} value={1} onSelectValue={() => {}}>
          {'title1'}
        </Collection.Item>
        <Collection.Item index={1} value={2} onSelectValue={() => {}}>
          {'title2'}
        </Collection.Item>
      </Collection.Provider>,
    );

    const item1 = screen.getByText('title1');
    userEvent.click(item1);
    userEvent.keyboard('{enter}');
    expect(item1).toHaveFocus();
  });
});
