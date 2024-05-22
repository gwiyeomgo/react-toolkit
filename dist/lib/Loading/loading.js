var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
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
      case 'line':
        return css`
          background-color: grey;
          box-shadow:
            rgba(0, 0, 0, 0.07) 0px 1px 2px,
            rgba(0, 0, 0, 0.07) 0px 2px 4px,
            rgba(0, 0, 0, 0.07) 0px 4px 8px,
            rgba(0, 0, 0, 0.07) 0px 8px 16px,
            rgba(0, 0, 0, 0.07) 0px 16px 32px,
            rgba(0, 0, 0, 0.07) 0px 32px 64px;
          &:nth-child(1) {
            animation-delay: 0s;
            background-color: ${colorPalette && colorPalette[1]};
          }

          &:nth-child(2) {
            animation-delay: 0.5s;
            background-color: ${colorPalette && colorPalette[2]};
          }

          &:nth-child(3) {
            animation-delay: 1s;
            background-color: ${colorPalette && colorPalette[3]};
          }
          animation: ${load} ${speed}s linear infinite;
        `;
      default:
        return css`
          border: 3px solid ${color || '#fff'};
          border-bottom-color: transparent;
          animation: ${rotation} ${speed}s linear infinite;
        `;
    }
  }}
`;
const defaultColors = ['#ffc2e1', '#ffb4be', '#ff97bb', '#ff7cb4'];
const Loading = (props) => {
  const {
      type = 'default',
      size = 10,
      color,
      speed = 2,
      colorPalette = defaultColors,
    } = props,
    rest = __rest(props, ['type', 'size', 'color', 'speed', 'colorPalette']);
  return type === 'default'
    ? React.createElement(
        DefaultSpan,
        Object.assign({}, rest, {
          speed: speed,
          color: color,
          type: type,
          size: size,
        }),
      )
    : React.createElement(
        'div',
        null,
        React.createElement(
          DefaultSpan,
          Object.assign({}, rest, {
            colorPalette: colorPalette,
            speed: speed,
            type: type,
            size: size,
          }),
        ),
        React.createElement(
          DefaultSpan,
          Object.assign({}, rest, {
            colorPalette: colorPalette,
            speed: speed,
            type: type,
            size: size,
          }),
        ),
        React.createElement(
          DefaultSpan,
          Object.assign({}, rest, {
            colorPalette: colorPalette,
            speed: speed,
            type: type,
            size: size,
          }),
        ),
      );
};
export { Loading };
