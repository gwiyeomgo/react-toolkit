import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { SortableList } from './sortableList';
import { fireEvent } from '@testing-library/react';

it('SortableList 렌더링', async () => {
  render(<SortableList initialList={['1', '2', '3']} height={200} />);

  const item = screen.getByText('1');

  await act(() => {
    fireEvent.touchStart(item);
  });

  await waitFor(() => {
    expect(item.classList).toHaveProperty('0', 'touched');
  });
});

test('첫번째 item 마지막으로 이동', () => {
  const { getByText } = render(
    <SortableList initialList={['1', '2', '3']} height={200} />,
  );

  const startItem = getByText('1');
  const endItem = getByText('3');

  waitFor(() => {
    expect(startItem).toHaveProperty('key', '0');
  });

  fireEvent.dragStart(startItem);

  act(() => {
    fireEvent.dragEnter(endItem);
    fireEvent.dragOver(endItem);
    fireEvent.drop(endItem);
  });

  fireEvent.dragEnd(startItem);

  waitFor(() => {
    expect(startItem).toHaveProperty('key', '2');
  });
});
