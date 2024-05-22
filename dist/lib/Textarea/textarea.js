import React from 'react';
import styled from 'styled-components';
const StyledTextarea = styled.textarea`
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
const Textarea = (props) => {
  const { height, value, onChange } = props;
  return React.createElement(StyledTextarea, {
    className: props.className,
    style: props.style,
    height: height,
    value: value,
    onChange: onChange,
  });
};
export { Textarea };
