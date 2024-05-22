import React from 'react';
type TextInputProps = {
  children?: React.ReactNode;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};
declare const Textarea: (props: TextInputProps) => React.JSX.Element;
export { Textarea, TextInputProps };
