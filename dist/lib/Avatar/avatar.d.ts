import React from 'react';
import { CSSProperties } from 'react';
export type AvatarProps = {
  style?: CSSProperties;
  src?: string;
  imageBorderRadius?: number;
};
declare const Avatar: (props: AvatarProps) => React.JSX.Element;
export { Avatar };
