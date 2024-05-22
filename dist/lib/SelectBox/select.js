import React, { createContext, useEffect, useContext, useState } from 'react';
import { Collection, useCollection } from './collection';
import styled from 'styled-components';
const TriggerButton = styled.button`
  position: relative;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }

  &[aria-expanded='true']::after {
    border-top: none;
    border-bottom: 5px solid #000;
    transform: translateY(-50%) rotate(180deg);
  }
`;
const SelectTrigger = ({ data }) => {
  const context = useSelectContext();
  const onKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 40) {
      e.preventDefault();
      if (!context.open) {
        context.onOpenChange(true);
      }
    }
  };
  const filteredData =
    data && data.filter((obj) => obj.value === context.value);
  return React.createElement(
    TriggerButton,
    {
      onClick: () => {
        context.onOpenChange(!context.open);
      },
      role: 'combobox',
      'aria-expanded': context.open,
    },
    filteredData &&
      filteredData.map((item) =>
        React.createElement(
          'span',
          {
            key: item.id,
            onKeyDown: onKeyDown,
            tabIndex: 0,
            style: { width: '120px' },
          },
          item.label,
        ),
      ),
  );
};
//https://ko.legacy.reactjs.org/docs/context.html
//context 는 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공
//애플리케이션 안의 여러 컴포넌트들에 전해줘야 하는 상황
const SelectContext = createContext(undefined);
//Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링 됩니다
const SelectContextProvider = ({ children, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  return React.createElement(
    SelectContext.Provider,
    { value: { open, onOpenChange: setOpen, value, onValueChange: setValue } },
    React.createElement(Collection.Provider, null, children),
  );
};
const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      'SelectContext은 SelectBox.Provider 내에서 사용되어야 합니다',
    );
  }
  return context;
};
const Ul = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: ${(props) => props.width};
  margin: auto;
  padding: 0;
  border-radius: 0px 0px 10px 10px;
  background-color: white;
  position: absolute;
  border-radius: 10px;
  box-shadow:
    rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;
const Li = styled.li`
  display: flex;
  width:  ${(props) => props.width};
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;x
  border-bottom: 2px solid #d2d2d2;
  border-top: none;
  border-radius: 10px;
  color: #d2d2d2;
  &:hover {
    color: black;
    cursor: pointer;
 }
  &:last-child {
    border-bottom: none;
  }
`;
const OptionList = ({ children, width }) => {
  const context = useSelectContext();
  return React.createElement(
    Ul,
    { open: context.open, width: !width ? '140px' : width, role: 'listbox' },
    context.open &&
      React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && index > -1) {
          //React.cloneElement 함수는 자식 엘리먼트에 적용할 프로퍼티를 받아서 새로운 React 엘리먼트를 생성합니
          return React.cloneElement(
            child,
            Object.assign(Object.assign({}, child.props), { index, context }),
          );
        }
      }),
  );
};
const Option = ({ index, value, children, context, width }) => {
  const options = useCollection();
  useEffect(() => {
    if (context && context.open && value === context.value) {
      options.focusItem(value);
    }
  }, [context, options, value]);
  return React.createElement(
    Collection.Item,
    {
      value: value,
      index: index,
      onSelectValue: (v) => {
        context && context.onValueChange(v);
        context && context.onOpenChange(false);
      },
    },
    React.createElement(
      Li,
      { tabIndex: index, width: !width ? '112px' : width },
      children,
    ),
  );
};
const Select = {
  Option,
  OptionList,
  Provider: SelectContextProvider,
  Trigger: SelectTrigger,
};
export { Select, useSelectContext };
