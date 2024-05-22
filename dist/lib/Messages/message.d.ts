import React from 'react';
type MessageProps = {
  id: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export declare const Message: ({
  children,
  className,
  style,
}: MessageProps) => React.JSX.Element;
export {};
