import React from 'react';
export type ButtonType = 'primary' | 'secondary';
export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  type?: ButtonType;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  isSearchButton?: boolean;
  disabled?: boolean;
  danger?: boolean;
};
declare const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
>;
export { Button };
