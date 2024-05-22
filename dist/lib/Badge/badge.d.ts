import React from 'react';
export type BadgeProps = {
  children?: React.ReactNode;
  count?: number;
  color?: string;
  text?: string;
  moveLeft?: number;
  moveBottom?: number;
  className?: string;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
};
declare const Badge: ({
  children,
  count,
  color,
  text,
  moveLeft,
  moveBottom,
  textStyle,
}: BadgeProps) => React.JSX.Element;
export { Badge };
