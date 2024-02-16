import { useIsMobile } from './useIsMobile';

import React from 'react';
import { act, render, screen } from '@testing-library/react';

const Test = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? 'yes' : 'no'}</>;
};

it('true 테스트', () => {
  act(() => {
    render(<Test />);
  });
  const element = screen.getByText('no');
  expect(element).toBeInTheDocument();

  act(() => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
  });

  const element1 = screen.getByText('yes');
  expect(element1).toBeInTheDocument();
});
