import React from 'react';
export type ListItem = {
  id: number;
  message: string;
  style?: React.CSSProperties;
  classNames?: string;
};
/**
 * JSX나 다른 컴파일된 JavaScript 코드에서는 type으로 정의된 타입이 유지되는 반면,
 *  interface로 정의된 타입은 사라질 수 있습니다.
 *  https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
 * */
type MessageGroupProps = {
  list?: ListItem[];
  delay: number;
  style?: React.CSSProperties;
  classNames?: string;
  addMessage?: boolean;
  boxMinHeight?: string;
};
declare const MessageGroup: ({
  boxMinHeight,
  delay,
  list,
  addMessage,
}: MessageGroupProps) => React.JSX.Element;
export { MessageGroup };
