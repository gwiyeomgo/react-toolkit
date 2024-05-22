import React, { CSSProperties } from 'react';
type LoadingType = 'default' | 'line';
export type LoadingProps = {
  type?: LoadingType;
  size?: number;
  color?: string;
  speed?: number;
  colorPalette?: string[];
  style?: CSSProperties;
};
declare const Loading: React.FC<LoadingProps>;
export { Loading };
