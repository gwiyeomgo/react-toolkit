import React from 'react';
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

type positionType = 'outer' | 'inner';
interface InputProps {
  label?: string;
  labelPosition?: positionType;
  labelStyle?: React.CSSProperties;
}
const Input = (props: InputProps) => {
  const { label, labelPosition = 'outer', labelStyle, ...inputProps } = props;

  const valid = labelPosition === 'inner';

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
        className={classnames(styles.defaultInput, {
          [styles.expandInput]: valid,
        })}
        type="text"
        {...inputProps}
      />
    </InputRoot>
  );
};

export { Input };
