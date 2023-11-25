import React from "react";
import styled, { keyframes, css } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const load = keyframes`
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const DefaultSpan = styled.span`
  padding: 10px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;

  ${({ type, speed, color, colorPalette }) => {
  switch (type) {
    case "line":
      return css`
          background-color: grey;

          &:nth-child(1) {
            animation-delay: 0s;
            background-color: ${colorPalette && colorPalette[1]};
          }

          &:nth-child(2) {
            animation-delay: 0.2s;
            background-color: ${colorPalette && colorPalette[2]};
          }

          &:nth-child(3) {
            animation-delay: 0.4s;
            background-color: ${colorPalette && colorPalette[3]};
          }
          animation: ${load} ${speed}s linear infinite;
        `;
    default:
      return css`
          border: 3px solid ${color || "#fff"};
          border-bottom-color: transparent;
          animation: ${rotation} ${speed}s linear infinite;
        `;
  }
}}
`;

const Loading = (props) => {
  const {
    type = "default",
    size = 10,
    color,
    speed = 2,
    colorPalette = ["#ffc2e1", "#ffb4be", "#ff97bb", "#ff7cb4"],
    ...rest
  } = props;

  return type === "default" ? (
    <DefaultSpan
      {...rest}
      speed={speed}
      color={color}
      type={type}
      size={size}
    />
  ) : (
    <div>
      <DefaultSpan
        {...rest}
        colorPalette={colorPalette}
        speed={speed}
        type={type}
        size={size}
      />
      <DefaultSpan
        {...rest}
        colorPalette={colorPalette}
        speed={speed}
        type={type}
        size={size}
      />
      <DefaultSpan
        {...rest}
        colorPalette={colorPalette}
        speed={speed}
        type={type}
        size={size}
      />
    </div>
  );
};

export { Loading };
