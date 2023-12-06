import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import classNames from 'classnames/bind';
import { Loading } from '../Loading/loading';
const cx = classNames.bind(styles);

export type ButtonType = 'default' | 'outline';
export type ButtonColors = 'primary' | 'success' | 'danger' | 'warning';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  color?: ButtonColors | string;
  type?: ButtonType;
  loading?: boolean;
  icon?: React.ReactNode;
  classNames?: { icon: string };
  disabled?: boolean;
  style?: React.CSSProperties;
  styles?: { icon: React.CSSProperties };
}

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props) => {
  //primary,danger,success, warning
  //default outline
  const {
    children,
    color,
    type,
    loading = false,
    icon,
    disabled,
    ...rest
  } = props;
  const hasChildren = children !== undefined && children !== null;
  const [innerLoading, setLoading] = useState(loading);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = props;
    if (innerLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const iconNode = innerLoading ? <Loading /> : icon;
  const childClass = cx({ 'child-space': iconNode });
  const buttonClass = cx('btn', type, color, {
    'icon-container': iconNode,
  });

  return (
    <button
      role="button"
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {iconNode}
      {hasChildren && <span className={childClass}>{children}</span>}
    </button>
  );
};

export { Button };
