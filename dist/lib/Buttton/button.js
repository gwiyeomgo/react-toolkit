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
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';
const cx = classNames.bind(styles);
import classNames from 'classnames/bind';
import { Loading } from '../Loading/loading';
import classnames from 'classnames';
const Button = (props) => {
  const {
      onClick,
      children,
      type,
      loading = false,
      icon,
      disabled,
      isSearchButton,
      danger = false,
    } = props,
    rest = __rest(props, [
      'onClick',
      'children',
      'type',
      'loading',
      'icon',
      'disabled',
      'isSearchButton',
      'danger',
    ]);
  const hasChildren = children !== undefined && children !== null;
  const [innerLoading, setInnerLoading] = useState(loading);
  useEffect(() => {
    setInnerLoading(loading);
  }, [loading]);
  const handleClick = (e) => {
    if (innerLoading) {
      //해당 이벤트 객체에 대한 기본 동작이 이미 취소되었기 때문에 추가적인 반환은 필요하지 않습니다.
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const iconNode = innerLoading ? React.createElement(Loading, null) : icon;
  const childClass = cx({ 'child-space': iconNode });
  const buttonClass = cx('btn', type, {
    'icon-container': iconNode,
  });
  return React.createElement(
    'button',
    Object.assign(
      {
        role: 'button',
        className: classnames(buttonClass, {
          [styles.searchButton]: isSearchButton,
          [styles.danger]: danger,
        }),
        onClick: handleClick,
        disabled: disabled,
      },
      rest,
    ),
    iconNode,
    hasChildren &&
      React.createElement('span', { className: childClass }, children),
  );
};
export { Button };
