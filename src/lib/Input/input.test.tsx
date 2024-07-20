import { act, render } from '@testing-library/react';
import { Input, InputRef } from './input';
import React, { useState } from 'react';
import { fireEvent } from '@storybook/test';
import mountTest from '../../../tests/mountTest';
import accessibilityTest from '../../../tests/accessibilityTest';
import focusTest from '../../../tests/focusTest';

describe('input 전체 테스트', () => {
  mountTest(Input);
  accessibilityTest(Input);
  focusTest(Input);

  it('Input 렌더링', () => {
    render(<Input />);
  });

  //onChange
  it('onChange()', async () => {
    const App: React.FC = () => {
      const [data, setData] = useState('init');
      return (
        <Input
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      );
    };

    const { container, unmount } = render(<App />);

    await act(() => {
      container.querySelector('input')?.focus();
      const target = {} as { value: string };
      target.value = '111';
      //TODO warning  Forbidden non-null assertion ->
      fireEvent.change(container.querySelector('input')!, {
        target: target,
      });

      expect(container.querySelector('input')?.value).toEqual('111');

      unmount();
    });
  });

  it('set mouse cursor position', () => {
    //사용자가 "11111"이라는 텍스트를 입력한 후에
    // 커서가 마지막에 위치하면
    // 마우스나 키보드로 선택을 확장하지 않고 그대로 두었을 때
    const value = '11111';
    const valLength = value.length;
    const ref = React.createRef<InputRef>();
    const { container } = render(<Input ref={ref} value={value} />);
    ref.current?.setSelectionRange(valLength, valLength);
    expect(container.querySelector('input')?.selectionStart).toEqual(5);
    expect(container.querySelector('input')?.selectionEnd).toEqual(5);
  });

  //select
  it('select()', () => {
    const ref = React.createRef<InputRef>();
    render(<Input ref={ref} />);
    ref.current?.select();
  });
  //blur
  it('blur()', () => {
    const ref = React.createRef<InputRef>();
    render(<Input ref={ref} />);
    ref.current?.blur();
  });

  //clear
  it('clear()', () => {
    const ref = React.createRef<InputRef>();
    render(<Input ref={ref} />);
    ref.current?.clear();
  });
});
