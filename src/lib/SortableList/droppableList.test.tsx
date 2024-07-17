import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DroppableList } from './droppableList';

test('첫번째 item 마지막으로 이동', () => {
  const { getByText, container } = render(<DroppableList count={3} />);

  const startItem = getByText('item 0');
  const endItem = getByText('item 2');

  fireEvent.dragStart(startItem);

  act(() => {
    // act는 React 상태 업데이트가 발생할 때 테스트가 올바르게 작동하도록 보장
    fireEvent.dragEnter(endItem);
    fireEvent.dragOver(endItem);
    fireEvent.drop(endItem);
  });

  fireEvent.dragEnd(startItem);

  waitFor(() => {
    const items = container.querySelectorAll('[data-rbd-draggable-id]');
    expect(items[items.length - 1]).toHaveTextContent('item 0');
  });
});
