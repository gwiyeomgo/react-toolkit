import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge } from './badge';

it('moveBottom,moveLeft 에 50 이상의 값을 입력한 경우', () => {
  //S2339: Property 'mockImplementation' does not exist on type
  jest.spyOn(console, 'error').mockImplementation(() => undefined);

  expect(() => {
    render(
      <>
        <Badge count={2} moveBottom={55} moveLeft={30}>
          <div />
        </Badge>
      </>,
    );
  }).toThrow(new Error('moveBottom 과 moveLeft 은 50 이하의 숫자여야 합니다.'));

  jest.spyOn(console, 'error').mockRestore();
});

describe('Badge 컴포넌트 테스트 - 숫자가 있는 경우 - 렌더링 테스트', () => {
  test('Badge 에서 count 가 일치하는지 확인 (성공)', () => {
    render(<Badge count={1111} />);
    const textElement = screen.getByText('1111');
    //toBeInTheDocument = 존재하는지 체크
    expect(textElement).toBeInTheDocument();
  });

  test('Badge 에서 color 가 적용되었는지 확인 (성공)', () => {
    render(
      <Badge count={2222} color={'pink'}>
        <div
          style={{
            width: '100px',
            height: '50px',
          }}
        />
      </Badge>,
    );
    expect(screen.getByText('2222')).toHaveStyle('backgroundColor: pink');
  });
});

describe('Badge 컴포넌트 테스트 - 숫자가 없고 텍스트가 있는 경우 - 렌더링 테스트', () => {
  test('문자열 있는 경우', () => {
    render(<Badge color={'green'} text={'안녕'} />);
    const textElement = screen.getByText('안녕');
    expect(textElement).toBeInTheDocument();
  });

  test('textStyle 을 변경한 경우 적용되었는지 확인', () => {
    render(
      <Badge
        color={'yellow'}
        text={'안녕2'}
        textStyle={{ fontWeight: 'bold' }}
      />,
    );
    expect(screen.getByText('안녕2')).toHaveStyle('fontWeight: bold');
  });
});
