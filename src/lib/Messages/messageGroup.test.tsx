import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MessageGroup } from './messageGroup';
import userEvent from '@testing-library/user-event';

const list = [
  {
    id: 1,
    message: '안녕하세요',
    style: {
      color: '#619290',
    },
  },
];

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

it('Message Group 렌더링', async () => {
  const delay = 1000;
  render(<MessageGroup delay={delay} list={list} />);
  //화면에 2000 후 안녕하세요 출력되었는지 확인
  // 타이머 진행
  await act(() => {
    jest.advanceTimersByTime(delay);
  });

  // 딜레이 이후의 최종 값 확인
  const textElement = screen.getByText('안녕하세요');
  //toBeInTheDocument = 존재하는지 체크
  expect(textElement).toBeInTheDocument();
});

it('Message Group 렌더링2', async () => {
  const delay = 1000;
  render(<MessageGroup delay={delay} list={list} addMessage={true} />);

  //메세지 입력
  await act(() => {
    const inputElement = screen.getByRole('textbox', { name: 'input-field' });
    userEvent.type(inputElement, '테스트성공?');
  });
  //검색 버튼 클릭

  // 타이머 진행
  await act(() => {
    jest.advanceTimersByTime(delay);
  });

  await act(() => {
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[1]);
  });

  // 타이머 진행
  await act(() => {
    jest.advanceTimersByTime(delay * 2);
  });

  await waitFor(() => {
    const textElement = screen.getByText('테스트성공?');
    expect(textElement).toBeInTheDocument();
  });
});

/*

  // 타이머 진행
  act(() => {
    jest.advanceTimersByTime(delay *2);
    const textElement = screen.getByText('ㅋ')
console.log(textElement)
  });
*/

/* //

  // 타이머 진행
  act(() => {
    jest.advanceTimersByTime(delay);
  });

  //
  const textElement2 = screen.getByText('ㅋ');
  console.log(textElement2)

});*/

/*
test('addMessage가 true일 때, SearchInput이 정상적으로 동작하는지 확인', () => {
  render(<MessageGroup addMessage={true} delay={1000} />);

  // 처음에는 Footer가 존재하지 않음
  expect(screen.queryByText('Your SearchInput Value')).toBeNull();

  // SearchInput이 나타났는지 확인
  expect(screen.queryByPlaceholderText('Type a message...')).toBeInTheDocument();

  // SearchInput에 값을 입력하고 버튼을 클릭하여 메시지를 추가
  userEvent.type(screen.getByPlaceholderText('Type a message...'), 'Your SearchInput Value');
  userEvent.click(screen.getByRole('button', { name: 'Search' }));

  // 새로운 메시지가 포함된 Message가 나타났는지 확인
  expect(screen.getByText('ㅋ')).toBeInTheDocument();
});
*/
