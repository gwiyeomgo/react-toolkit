import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { Counter } from './counter';
import userEvent from '@testing-library/user-event';

it('Counter 렌더링', () => {
  const mock = jest.fn();
  render(<Counter getDebouncedResult={mock} />);

  // "button" 역할을 가진 모든 요소를 찾음
  const buttons = screen.getAllByRole('button');
  // aria-label이 "input-field"인 요소를 찾음
  const inputElement = screen.getByLabelText('input-field');

  //  expect(buttons.length).toBe(2);

  act(() => {
    // + 버튼 클릭
    userEvent.click(buttons[0]);
  });

  // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
  expect(inputElement).toHaveValue('1');

  act(() => {
    // - 버튼 클릭
    userEvent.click(buttons[1]);
  });

  // waitFor 사용 변경된 값이 화면에 나타날 때까지 기다림
  expect(inputElement).toHaveValue('0');
});
