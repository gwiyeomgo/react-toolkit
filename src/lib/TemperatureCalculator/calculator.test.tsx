import { render, waitFor, screen, act } from '@testing-library/react';
import React from 'react';
import { Calculator } from './calculator';
import { fireEvent } from '@storybook/test';

it('Calculator 렌더링', async () => {
  render(<Calculator />);
  const input = screen.getAllByRole('input');

  await act(() => {
    const target = {} as { value: string };
    target.value = '0';
    fireEvent.change(input[0], {
      target: target,
    });
  });
  await waitFor(() => {
    const textElement = screen.getByText('The water would not boil.');
    expect(textElement).toBeInTheDocument();
  });
});

it('Calculator 렌더링2', () => {
  render(<Calculator />);
  const input = screen.getAllByRole('input');

  act(() => {
    const target = {} as { value: string };
    target.value = '111';
    fireEvent.change(input[0], {
      target: target,
    });
  });

  const textElement = screen.getByText('The water would boil.');

  waitFor(() => {
    expect(textElement).toBeInTheDocument();
  });
});
