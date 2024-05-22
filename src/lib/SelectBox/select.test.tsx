import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Select, SelectContextProps } from './select';
import userEvent from '@testing-library/user-event';

const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});
test('렌더링 완료 (성공)', () => {
  render(
    <Select.Provider defaultValue={'a'}>
      <Select.Trigger />
      <Select.OptionList>
        {
          ((context: SelectContextProps, index: number) => (
            <Select.Option context={context} value={index} index={index}>
              Option {index}
            </Select.Option>
          )) as unknown as React.ReactNode
        }
      </Select.OptionList>
    </Select.Provider>,
  );
});

test('SelectBox.Trigger(combobox) 를 클릭했을때 목록이 열리는가? (성공)', async () => {
  render(
    <Select.Provider defaultValue={'a'}>
      <Select.Trigger />
      <Select.OptionList>
        <Select.Option value="a" index={0}>
          Option 1
        </Select.Option>
        <Select.Option value="b" index={1}>
          Option 2
        </Select.Option>
        <Select.Option value="c" index={2}>
          Option 3
        </Select.Option>
      </Select.OptionList>
    </Select.Provider>,
  );

  const select = screen.getByRole('combobox', {
    expanded: false,
  });
  expect(select).toHaveAttribute('aria-expanded', 'false');

  await act(() => {
    userEvent.click(select);
  });
  expect(select).toHaveAttribute('aria-expanded', 'true');
});

it('SelectBox.Provider 사용 안했을때', () => {
  expect(() => {
    render(
      <Select.OptionList>
        <Select.Option value="a" index={0}>
          Option 1
        </Select.Option>
        <Select.Option value="b" index={1}>
          Option 2
        </Select.Option>
        <Select.Option value="c" index={2}>
          Option 3
        </Select.Option>
      </Select.OptionList>,
    );
  }).toThrow(
    new Error('SelectContext은 SelectBox.Provider 내에서 사용되어야 합니다'),
  );
});
