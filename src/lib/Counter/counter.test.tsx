import { render, screen } from '@testing-library/react';
import { Counter } from '../Counter/counter';
import React from 'react';
import userEvent from '@testing-library/user-event';

it('Counter 렌더링', async () => {
  // const [count,setCount] = useState("")
  render(
    <Counter
      getDebouncedResult={(value) => {
        try {
          console.log(value);
        } catch (error) {
          console.error('Error calling API:', error);
        }
      }}
    />,
  );

  // "button" 역할을 가진 모든 요소를 찾음
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(2);

  // Click the button
  userEvent.click(buttons[0]);
  userEvent.click(buttons[1]);
});
