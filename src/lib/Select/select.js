import React, { createContext, useEffect, useContext, useState } from "react";
import { Collection, useCollection } from "./collection";
import styled from "styled-components";

const TriggerButton = styled.button`
  position: relative;
  padding: 10px;
  background-color: white;
  border: 1px solid;
  cursor: pointer;
  span {
    display: inline-block;
    vertical-align: middle;
  }

  &::after {
    content: "";
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

  &[aria-expanded="true"]::after {
    border-top: none;
    border-bottom: 5px solid #000;
    transform: translateY(-50%) rotate(180deg);
  }
`;

const SelectTrigger = () => {
  const context = useSelectContext();

  const onKeyDown = (e) => {
    if (e.keyCode === 40) {
      e.preventDefault();
      if (!context.open) {
        context.onOpenChange(true);
      }
    }
  };
  return (
    <TriggerButton
      onClick={() => {
        context.onOpenChange(!context.open);
      }}
      role="combobox"
      aria-expanded={context.open}
    >
      <span onKeyDown={onKeyDown} tabIndex={0} style={{ width: "120px" }}>
        {context.value}
      </span>
    </TriggerButton>
  );
};

const SelectContext = createContext(undefined);
const SelectContextProvider = ({ children, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <SelectContext.Provider
      value={{ open, onOpenChange: setOpen, value, onValueChange: setValue }}
    >
      <Collection.Provider>{children}</Collection.Provider>
    </SelectContext.Provider>
  );
};

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("SelectContext은 Select.Provider 내에서 사용되어야 합니다");
  }
  return context;
};

const Ul = styled.ul`
  display: ${(props) => (props.open ? "block" : "none")};
  width: 100px;
  background-color: white;
  position: absolute;
  border: 2px solid lightgray;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;
  border-bottom: 2px solid #d2d2d2;
  border-top: none;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const OptionList = ({ children }) => {
  const context = useSelectContext();
  return (
    <Ul open={context.open} role="listbox">
      {context.open &&
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            index,
            context
          });
        })}
    </Ul>
  );
};

const Option = ({ index, value, children, context }) => {
  const options = useCollection();
  useEffect(
    () => {
      context.open && value === context.value && options.focusItem(value);
    },
    [context, options, value],
    options
  );
  return (
    <Collection.Item
      value={value}
      index={index}
      onSelectValue={(v) => {
        context.onValueChange(v);
        context.onOpenChange(false);
      }}
    >
      <Li tabIndex={index}>{children}</Li>
    </Collection.Item>
  );
};

const Select = {
  Option,
  OptionList,
  Provider: SelectContextProvider,
  Trigger: SelectTrigger
};

export { Select, useSelectContext };
