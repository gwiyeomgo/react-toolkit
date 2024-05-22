import React, { LegacyRef, InputHTMLAttributes } from 'react';
export type ValueType = InputHTMLAttributes<HTMLInputElement>['value'] | bigint;
type positionType = 'outer' | 'inner';
export type InputRef = {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  clear: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none',
  ) => void;
  select: () => void;
  input: HTMLInputElement | null;
};
export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}
type InputProps = {
  label?: string;
  labelPosition?: positionType;
  labelStyle?: React.CSSProperties;
  value?: ValueType;
  placeholder?: string;
  readOnly?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  onChange?: (text: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  typeSearch?: boolean;
};
declare const Input: React.ForwardRefExoticComponent<
  Omit<InputProps, 'ref'> & React.RefAttributes<InputRef>
>;
export { Input };
