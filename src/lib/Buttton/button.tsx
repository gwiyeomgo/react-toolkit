import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import classNames from 'classnames/bind';
import { Loading } from '../Loading/loading';
import classnames from 'classnames';
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
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  isSearchButton?: boolean;
}

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props) => {
  //primary,danger,success, warning
  //default outline
  const {
    onClick,
    children,
    color,
    type,
    loading = false,
    icon,
    disabled,
    isSearchButton,
    ...rest
  } = props;
  const hasChildren = children !== undefined && children !== null;
  const [innerLoading, setInnerLoading] = useState(loading);

  useEffect(() => {
    setInnerLoading(loading);
  }, [loading]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (innerLoading) {
      //해당 이벤트 객체에 대한 기본 동작이 이미 취소되었기 때문에 추가적인 반환은 필요하지 않습니다.
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
      className={classnames(buttonClass, {
        [styles.searchButton]: isSearchButton,
      })}
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
