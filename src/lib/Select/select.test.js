import React from 'react'
import { render, screen } from '@testing-library/react';
import { Select } from './select';
import userEvent from "@testing-library/user-event";
import { Collection } from './collection';


const originalError = console.error;
beforeEach(() => {
  console.error = jest.fn()
})

afterEach(() => {
  console.error = originalError;
})
test('렌더링 완료 (성공)', () => {
 render(
    <Select.Provider defaultValue={"a"}>
      <Select.Trigger />
      <Select.OptionList>
        <Select.Option value="a">Option 1</Select.Option>
        <Select.Option value="b">Option 2</Select.Option>
        <Select.Option value="c">Option 3</Select.Option>
      </Select.OptionList>
    </Select.Provider>
  );
});

test('DropDown.Trigger(combobox) 를 클릭했을때 목록이 열리는가? (성공)', async () => {
  render(
    <Select.Provider defaultValue={"a"}>
      <Select.Trigger />
      <Select.OptionList>
        <Select.Option value="a">Option 1</Select.Option>
        <Select.Option value="b">Option 2</Select.Option>
        <Select.Option value="c">Option 3</Select.Option>
      </Select.OptionList>
    </Select.Provider>
  );

  const select = screen.getByRole("combobox",{
    expanded:false,
  });
  expect(select).toHaveAttribute('aria-expanded', 'false');

   await  userEvent.click(select);
   expect(select).toHaveAttribute('aria-expanded', 'true');
});


it("Select.Provider 사용 안했을때",()=>{
  expect(() => {
    render(
        <Select.OptionList>
          <Select.Option value="a">Option 1</Select.Option>
          <Select.Option value="b">Option 2</Select.Option>
          <Select.Option value="c">Option 3</Select.Option>
        </Select.OptionList>
    );
  }).toThrow( new Error('SelectContext은 Select.Provider 내에서 사용되어야 합니다'));

});