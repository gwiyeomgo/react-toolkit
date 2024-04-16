import { act, render, screen } from '@testing-library/react';

import React from 'react';
import DisplayImage from './displayImage';
import userEvent from '@testing-library/user-event';

it('DisplayImage', async () => {
  const remove = jest.fn();
  render(<DisplayImage src={''} remove={remove} />);

  const buttonElement = screen.getByRole('button');
  await act(() => {
    userEvent.click(buttonElement);
  });
  expect(remove).toHaveBeenCalledTimes(1);
});
