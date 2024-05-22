import { useIsMobile } from './useIsMobile';
import React from 'react';
import { act, render, screen } from '@testing-library/react';
const Test = () => {
  const isMobile = useIsMobile();
  return React.createElement(React.Fragment, null, isMobile ? 'yes' : 'no');
};
it('true 테스트', () => {
  act(() => {
    render(React.createElement(Test, null));
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
