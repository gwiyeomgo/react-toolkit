import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { SortableList } from './sortableList';
import { fireEvent } from '@testing-library/react';

it('SelectBox 렌더링', async () => {
  render(<SortableList initialList={['1', '2', '3']} height={200} />);

  const item = screen.getByText('1');

  await act(() => {
    fireEvent.touchStart(item);
  });

  await waitFor(() => {
    expect(item.classList).toHaveProperty('0', 'touched');
  });
});
