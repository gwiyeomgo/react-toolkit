//https://codesandbox.io/p/sandbox/react-styled-components-toggle-switch-3ft38?file=%2Fsrc%2Freact-styled-switch.js%3A23%2C7-23%2C13
import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
const HiddenInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;
const Outline = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border-radius: 100px;
  background-color: #f0f0f0;
  box-shadow:
    rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  position: relative;
  transition: background-color 0.2s;
`;
const Toggle = styled.span`
  content: '';
  position: absolute;
  top: 1px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  border: 1px solid white;
  background-color: #f8f8f8;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  ${HiddenInput}:checked + ${Outline} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${Outline}:active & {
    width: 45px;
  }
`;
const ToggleButton = ({ id, toggled }) => {
  const [isToggleOn, setIsToggleOn] = useState(toggled);
  const handleClick = () => setIsToggleOn((prevState) => !prevState);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(HiddenInput, {
      id: id,
      type: 'checkbox',
      checked: isToggleOn,
    }),
    React.createElement(
      Outline,
      { htmlFor: id },
      React.createElement(Toggle, { role: 'button', onClick: handleClick }),
    ),
  );
};
export { ToggleButton };
