import { HTMLAttributes, Suspense, useMemo } from 'react';
import { icons } from './icons';
import React from 'react';

export type IconName = keyof typeof icons;
interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  rotate?: number;
  size?: number;
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
export const Icon = ({
  icon,
  className,
  rotate,
  size,
  color,
  ...rest
}: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        width: size,
        height: size,
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
