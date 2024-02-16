import { useScreenSize } from './useScreenSize';
import { act, render, screen } from '@testing-library/react';
import React from 'react';

const Test = () => {
  const screenSize = useScreenSize();
  return <>{screenSize.width}</>;
};
//https://stackoverflow.com/questions/45868042/figuring-out-how-to-mock-the-window-size-changing-for-a-react-component-test
it('innerWidth 값 500으로 변경되었는지 확인', () => {
  //act 함수는 React 테스트에서 상태 업데이트를 포함하는 코드를 감싸는 데 사용
  act(() => {
    render(<Test />);
  });
  //default window.innerWidth set by Jest is 1024px
  const element = screen.getByText('1024');
  expect(element.textContent).toBe('1024');

  act(() => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
  });
  //default window.innerWidth set by Jest is 1024px
  const element1 = screen.getByText('500');
  expect(element1.textContent).toBe('500');
});
