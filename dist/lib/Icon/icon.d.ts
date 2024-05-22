import { HTMLAttributes } from 'react';
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
declare const Icon: ({
  icon,
  className,
  rotate,
  width,
  height,
  color,
  ...rest
}: IconProps) => React.JSX.Element | null;
export { Icon, IconProps, IconName };
