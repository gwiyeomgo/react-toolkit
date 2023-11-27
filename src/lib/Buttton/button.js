import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import classNames from 'classnames/bind';
import { Loading } from '../Loading/loading';
const cx = classNames.bind(styles);

const Button = (props) => {
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

  const handleClick = (e) => {
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
