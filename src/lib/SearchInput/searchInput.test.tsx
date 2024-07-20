import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { SearchInput } from './searchInput';
import userEvent from '@testing-library/user-event';

it('SearchInput 렌더링', async () => {
  const delay = 1000;
  const onClick = jest.fn();

  render(<SearchInput onClickSearch={onClick} delay={delay} />);
  // aria-label이 "input-field"인 요소를 찾음
  const inputElement = screen.getByLabelText('input-field');
  const button = screen.getByRole('button');
  //메세지 입력
  await act(() => {
    userEvent.type(inputElement, 'SearchInput테스트');
  });

  // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
  await waitFor(() => {
    expect(inputElement).toHaveValue('SearchInput테스트');
  });

  //검색 버튼 클릭 1번
  await act(() => {
    userEvent.click(button);
  });

  // 클리어됨
  await waitFor(() => {
    expect(inputElement).toHaveValue('');
  });

  expect(onClick).toHaveBeenCalledTimes(1);
});
