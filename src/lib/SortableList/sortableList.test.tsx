import { act, render } from '@testing-library/react';
import React from 'react';
import { SortableList } from './sortableList';

it('SelectBox 렌더링', () => {
  render(<SortableList initialList={['1', '2', '3']} />);
  act(() => {});
});
