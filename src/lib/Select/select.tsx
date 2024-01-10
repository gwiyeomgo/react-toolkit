import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from 'react';
import { Collection, useCollection } from './collection';
import styled from 'styled-components';

const TriggerButton = styled.button`
  position: relative;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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

const SelectTrigger = () => {
  const context = useSelectContext();

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { keyCode } = e;
    if (keyCode === 40) {
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
      <span onKeyDown={onKeyDown} tabIndex={0} style={{ width: '120px' }}>
        {context.value}
      </span>
    </TriggerButton>
  );
};

interface SelectContextProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  value: any; // 이 타입은 실제로 사용되는 값의 타입으로 수정해야 합니다.
  onValueChange: (newValue: any) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

interface SelectContextProviderProps {
  children?: ReactNode;
  defaultValue?: any; // 이 타입은 실제로 사용되는 기본 값의 타입으로 수정해야 합니다.
}
const SelectContextProvider: React.FC<SelectContextProviderProps> = ({
  children,
  defaultValue,
}) => {
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
    throw new Error('SelectContext은 Select.Provider 내에서 사용되어야 합니다');
  }
  return context;
};
interface UlProps {
  readonly open: boolean;
}
const Ul = styled.ul<UlProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  box-shadow:
    rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;x
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

const OptionList: React.FC<{ children: ReactNode }> = ({ children }) => {
  const context = useSelectContext();
  return (
    <Ul open={context.open} role="listbox">
      {context.open &&
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && index > 0) {
            //React.cloneElement 함수는 자식 엘리먼트에 적용할 프로퍼티를 받아서 새로운 React 엘리먼트를 생성합니
            return React.cloneElement(child as ReactElement, {
              index,
              context,
            });
          }
        })}
    </Ul>
  );
};
interface OptionProps {
  index: number;
  children: ReactNode;
  value: any; // 이 타입은 실제로 사용되는 값의 타입으로 수정해야 합니다.
  context?: SelectContextProps;
}
const Option = ({ index, value, children, context }: OptionProps) => {
  const options = useCollection();
  useEffect(() => {
    if (context && context.open && value === context.value) {
      options.focusItem(value);
    }
  }, [context, options, value]);

  return (
    <Collection.Item
      value={value}
      index={index}
      onSelectValue={(v) => {
        context && context.onValueChange(v);
        context && context.onOpenChange(false);
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
  Trigger: SelectTrigger,
};

export { Select, useSelectContext };
