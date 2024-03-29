import { render, screen } from '@testing-library/react';
import React from 'react';
import { LikeButton } from './likeButton';

it('LikeButton ', () => {
  render(
    <LikeButton
      onClick={() => {
        console.log('test');
      }}
    />,
  );
  const buttonElement = screen.getByRole('button'); //class="btn danger"
  console.log(buttonElement);
});
