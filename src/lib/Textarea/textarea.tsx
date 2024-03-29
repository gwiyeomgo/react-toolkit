import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea<{ height?: number }>`
  width: calc(100% - 32px);
  outline: none;
  border-radius: 10px;
  ${(props) =>
    props.height &&
    ` height: ${props.height}px;
    `}
  padding:20px;
  font-size: 16px;
  line-height: 20px;
  border: 0px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

type TextInputProps = {
  children?: React.ReactNode;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = (props: TextInputProps) => {
  const { height, value, onChange } = props;

  return (
    <StyledTextarea
      className={props.className}
      style={props.style}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
};

export { Textarea, TextInputProps };
