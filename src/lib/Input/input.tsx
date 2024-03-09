import React, {
  forwardRef,
  LegacyRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import styles from '../styles.module.css';
import styled from 'styled-components';
import classnames from 'classnames';

const InputRoot = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 50px;
  line-height: 1.1em;
  letter-spacing: 0.00938em;
  color: black;
  box-sizing: border-box;
  cursor: text;
  align-items: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Label = styled.label`
  white-space: nowrap;
  overflow: hidden; /* 내용이 넘칠 경우 숨김 */
  text-overflow: ellipsis; /* 넘친 부분에 대해 ...으로 표시 */
`;

const InputComponent = styled.input<{
  padding: string;
  paddinginlineend: string;
}>`
  width: 100%;
  font-size: 1rem;
  padding: ${(props) => props.padding};
  padding-inline-end: ${(props) => props.paddinginlineend};
`;

const ClearButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  position: relative;
  padding: 10px;
  background-color: lightgrey;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export type ValueType = InputHTMLAttributes<HTMLInputElement>['value'] | bigint;

type positionType = 'outer' | 'inner';

export type InputRef = {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  clear: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none',
  ) => void;
  select: () => void;
  input: HTMLInputElement | null;
};
export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

type InputProps = {
  label?: string;
  labelPosition?: positionType;
  labelStyle?: React.CSSProperties;
  value?: ValueType;
  placeholder?: string;
  readOnly?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  onChange?: (text: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  typeSearch?: boolean;
};
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    onChange,
    label,
    labelPosition = 'outer',
    labelStyle,
    value,
    typeSearch = false,
    readOnly,
    ...inputProps
  } = props;

  const valid = labelPosition === 'inner';
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const formatValue =
      value === undefined || value === null ? '' : String(value);

    setInputValue(formatValue);
  }, [value]);

  const clearInputValue = () => {
    if (inputRef.current) {
      setInputValue('');
      inputRef.current.value = '';
    }
  };
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
    // 부모 컴포넌트에서 호출 가능한 clear 메서드
    clear: clearInputValue,
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
    setInputValue(e.target.value);
    onChange?.(e);
  };
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
      <div
        className={classnames(styles.inputRoot, {
          [styles.searchInputRoot]: typeSearch,
        })}
      >
        <InputComponent
          role="input"
          disabled={readOnly}
          value={inputValue}
          ref={inputRef}
          onChange={handleChange}
          className={classnames(styles.defaultInput, {
            [styles.expandInput]: valid,
            [styles.searchInput]: typeSearch,
          })}
          type="text"
          padding={typeSearch ? '18px' : '10px'}
          paddinginlineend={typeSearch ? '12px' : '10px'}
          {...inputProps}
        />
        {!readOnly && inputValue.length > 0 && (
          <ClearButton onClick={clearInputValue}>X</ClearButton>
        )}
      </div>
    </InputRoot>
  );
});

//ESLint: Component definition is missing display name(react/display-name) 이 에러
Input.displayName = 'Input';
export { Input };
