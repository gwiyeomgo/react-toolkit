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
import { Suspense, useMemo } from 'react';
import { icons } from './icons';
import React from 'react';
/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @param size optional number size of the icon
 * @param color optional string color of the icon
 * @param ...rest
 * @returns Icon react component
 */
/*
*
Suspense 컴포넌트는 리액트의 지연된 로딩(lazy loading) 기능과 함께 사용됩니다.
lazy 함수는 컴포넌트의 지연된 로딩을 가능하게 합니다. 이것은 애플리케이션이 처음 로드될 때 필요하지 않은 컴포넌트를 로드하지 않고, 해당 컴포넌트가 필요한 시점에 비동기적으로 로드하여 성능을 최적화할 수 있게 해줍니다.
그러나 lazy 함수로 렌더링된 컴포넌트는 초기에 비동기적으로 로드되기 때문에 해당 컴포넌트가 로드될 때까지 부모 컴포넌트가 빈 화면이 될 수 있습니다. 이런 경우에 사용되는 것이 Suspense 컴포넌트입니다.
Suspense 컴포넌트는 지연된 로딩이 필요한 부분을 감쌀 수 있으며, 해당 부분이 로딩될 때까지 fallback 컨텐츠를 보여줄 수 있습니다. 이를 통해 사용자는 로딩 중에도 어떤 작업이 진행 중인지를 알 수 있고, 빈 화면을 피할 수 있습니다.
따라서 Suspense 컴포넌트는 지연된 로딩을 사용할 때 사용자 경험을 개선하고, 애플리케이션의 성능을 향상시키는 데 중요한 역할을 합니다.
* */
const Icon = (_a) => {
  var { icon, className, rotate, width, height, color } = _a,
    rest = __rest(_a, [
      'icon',
      'className',
      'rotate',
      'width',
      'height',
      'color',
    ]);
  const SvgIcon = useMemo(() => icons[icon], [icon]);
  if (!SvgIcon) return null;
  return React.createElement(
    'div',
    Object.assign(
      {
        className: className,
        'aria-label': icon,
        role: 'img',
        style: {
          width: width,
          height: height,
          fill: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        },
      },
      rest,
    ),
    React.createElement(
      Suspense,
      { fallback: null },
      React.createElement(SvgIcon, null),
    ),
  );
};
export { Icon };
