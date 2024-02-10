import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Button } from './button';
import userEvent from '@testing-library/user-event';
//import userEvent from '@testing-library/user-event';
//error  Require statement not part of import statement
//'@typescript-eslint/no-var-requires': 0,

describe('기본 버튼 color 와 type 이 적용되었는지 테스트', () => {
  it('color 지정시 ', () => {
    render(
      <>
        <Button color="danger" />
      </>,
    );
    const buttonElement = screen.getByRole('button');
    //classNaem 체크 방법
    //https://stackoverflow.com/questions/53389956/how-to-test-a-classname-with-the-jest-and-react-testing-library
    expect(buttonElement.classList.contains('danger')).toBe(true);
    expect(buttonElement).toHaveClass('danger');
  });

  it('type 지정시 ', () => {
    render(
      <>
        <Button type="outline" />
      </>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('outline');
  });

  it('버튼이 disabled 인 경우 버튼을 클릭한 후에 onClick 함수가 호출되지 않음 ', async () => {
    const onClick = jest.fn();

    render(
      <>
        <Button disabled={true} onClick={onClick} />
      </>,
    );
    const buttonElement = screen.getByRole('button');
    //disabled
    expect(buttonElement).toBeDisabled();

    await act(() => {
      userEvent.click(buttonElement);
    });
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('loading true 인 경우 버튼을 클릭한 후에 onClick 함수가 호출되지 않음 ', async () => {
    const onClickMock = jest.fn();
    render(
      <>
        <Button loading={true} onClick={onClickMock} />
      </>,
    );
    const buttonElement = screen.getByRole('button');

    await act(() => {
      userEvent.click(buttonElement);
    });
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
