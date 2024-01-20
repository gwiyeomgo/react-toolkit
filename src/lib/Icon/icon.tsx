import { HTMLAttributes, Suspense, useMemo } from 'react';
import { icons } from './icons';
import React from 'react';

type IconName = keyof typeof icons;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  rotate?: number;
  width?: string;
  height?: string;
}
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
const Icon = ({
  icon,
  className,
  rotate,
  width,
  height,
  color,
  ...rest
}: IconProps) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        width: width,
        height: height,
        fill: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};

export { Icon, IconProps, IconName };
