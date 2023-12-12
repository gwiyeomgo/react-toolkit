import React, {
  forwardRef,
  LegacyRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import styles from '../styles.module.css';
import styled from 'styled-components';
import classnames from 'classnames';

const InputRoot = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4em;
  letter-spacing: 0.00938em;
  color: black;
  padding: 10px;
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  position: relative;
  align-items: center;
`;
const Label = styled.label`
  color: black;
  cursor: default;
`;
const InputComponent = styled.input`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;
export type ValueType = InputHTMLAttributes<HTMLInputElement>['value'] | bigint;

type positionType = 'outer' | 'inner';

export interface InputRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none',
  ) => void;
  select: () => void;
  input: HTMLInputElement | null;
}
export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

interface InputProps {
  label?: string;
  labelPosition?: positionType;
  labelStyle?: React.CSSProperties;
  value?: ValueType;
  placeholder?: string;
  readOnly?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  onChange?: (text: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    onChange,
    label,
    labelPosition = 'outer',
    labelStyle,
    value,
    ...inputProps
  } = props;

  const valid = labelPosition === 'inner';
  const inputRef = useRef<HTMLInputElement>(null);

  const formatValue =
    value === undefined || value === null ? '' : String(value);

  /**
   useImperativeHandle :  부모 컴포넌트에게 제공되는 인터페이스를 정의
   이 코드를 통해 부모 컴포넌트에서 ref로 참조된 자식 컴포넌트에 접근할 수 있는 메서드들이 정의
   */
  useImperativeHandle(ref, () => ({
    // 부모 컴포넌트에서 호출 가능한 focus 메서드
    focus,

    // 부모 컴포넌트에서 호출 가능한 blur 메서드
    blur: () => {
      // inputRef가 존재하면 blur 메서드를 호출
      inputRef.current?.blur();
    },

    // 부모 컴포넌트에서 호출 가능한 setSelectionRange 메서드
    setSelectionRange: (
      start: number,
      end: number,
      direction?: 'forward' | 'backward' | 'none',
    ) => {
      // inputRef가 존재하면 setSelectionRange 메서드를 호출
      inputRef.current?.setSelectionRange(start, end, direction);
    },

    // 부모 컴포넌트에서 호출 가능한 select 메서드
    select: () => {
      // inputRef가 존재하면 select 메서드를 호출
      inputRef.current?.select();
    },

    // 부모 컴포넌트에서 input 엘리먼트에 직접 접근할 수 있는 참조
    input: inputRef.current,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };
  // console.error
  //     Warning: A component is changing an uncontrolled input to be controlled.
  //     This is likely caused by the value changing from undefined to a defined value,
  //     which should not happen.
  //     Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  //     More info: https://reactjs.org/link/controlled-components
  return (
    <InputRoot>
      {label && (
        <Label
          style={{ ...labelStyle }}
          className={classnames(
            styles.defaultLabel,
            { [styles.innerLabel]: valid },
            { [styles.backgroundWhite]: valid },
          )}
        >
          {label}
        </Label>
      )}
      <InputComponent
        value={formatValue || undefined} //undefined 는 React에서는 해당 프로퍼티를 전달하지 않은 것과 동일
        ref={inputRef}
        onChange={handleChange}
        className={classnames(styles.defaultInput, {
          [styles.expandInput]: valid,
        })}
        type="text"
        {...inputProps}
      />
    </InputRoot>
  );
});

//ESLint: Component definition is missing display name(react/display-name) 이 에러
Input.displayName = 'Input';
export { Input };
