import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
const cx = classNames.bind(styles);
import classNames from 'classnames/bind';
import { Loading } from '../Loading/loading';
import classnames from 'classnames';

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
  ref?: React.Ref<any>;
};

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
) => {
  const {
    onClick,
    children,
    type,
    loading = false,
    icon,
    disabled,
    isSearchButton,
    danger = false,
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
  const buttonClass = cx('btn', type, {
    'icon-container': iconNode,
  });

  return (
    <button
      role="button"
      className={classnames(buttonClass, {
        [styles.searchButton]: isSearchButton,
        [styles.danger]: danger,
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
