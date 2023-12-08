//https://codesandbox.io/p/sandbox/react-styled-components-toggle-switch-3ft38?file=%2Fsrc%2Freact-styled-switch.js%3A23%2C7-23%2C13

import * as React from 'react';
import styled from 'styled-components';

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
  border: 2px solid red;
  position: relative;
  transition: background-color 0.2s;
`;

const Toggle = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: blue;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${HiddenInput}:checked + ${Outline} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${Outline}:active & {
    width: 45px;
  }
`;

interface ToggleButtonProps {
  id?: string;
  toggled?: boolean;
  onChange?: () => void;
}
const ToggleButton = ({ id, toggled, onChange }: ToggleButtonProps) => {
  return (
    <>
      <HiddenInput
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <Outline htmlFor={id}>
        <Toggle />
      </Outline>
    </>
  );
};

export { ToggleButton };
