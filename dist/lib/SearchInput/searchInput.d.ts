import { CSSProperties } from 'react';
import React from 'react';
export type InputWithDebounceProps = {
  value?: string;
  buttonStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  onClickSearch?: (text: string) => void;
  delay: number;
};
declare const SearchInput: (props: InputWithDebounceProps) => React.JSX.Element;
export { SearchInput };
