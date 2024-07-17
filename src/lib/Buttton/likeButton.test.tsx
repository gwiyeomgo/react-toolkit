import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { LikeButton } from './likeButton';
import userEvent from '@testing-library/user-event';

it('LikeButton ', async () => {
  render(
    <LikeButton
      onClick={() => {
        console.log('LikeButton click');
      }}
    />,
  );
  const buttonElement = screen.getByRole('button');
  const iconElement = screen.getByRole('img');
  await act(() => {
    expect(iconElement).toHaveAttribute('aria-label', 'EmptyHeart');
    userEvent.click(buttonElement);
  });

  await waitFor(() => {
    expect(iconElement).toHaveAttribute('aria-label', 'Heart');
  });
});
