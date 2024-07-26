import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { LikeButton } from './likeButton';
import userEvent from '@testing-library/user-event';
import accessibilityTest from '../../../tests/accessibilityTest';
import mountTest from '../../../tests/mountTest';

describe('좋아요 버튼 테스트', () => {
  mountTest(LikeButton as any);
  accessibilityTest(LikeButton as any);
  it('LikeButton ', () => {
    render(<LikeButton onClick={jest.fn()} />);
    const buttonElement = screen.getByRole('button');
    const iconElement = screen.getByRole('img');
    act(() => {
      expect(iconElement).toHaveAttribute('aria-label', 'EmptyHeart');
      userEvent.click(buttonElement);
    });

    waitFor(() => {
      expect(iconElement).toHaveAttribute('aria-label', 'Heart');
    });
  });
});
