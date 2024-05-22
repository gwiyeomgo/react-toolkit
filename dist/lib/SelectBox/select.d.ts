import React, { ReactNode } from 'react';
type SelectTriggerProps = {
  id: number;
  value: string;
  label: string;
};
type SelectContextProps = {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  value: any;
  onValueChange: (newValue: any) => void;
};
type SelectContextProviderProps = {
  children?: ReactNode;
  defaultValue?: any;
};
declare const useSelectContext: () => SelectContextProps;
type OptionProps = {
  index: number;
  children: ReactNode;
  value: any;
  context?: SelectContextProps;
  width?: string;
};
declare const Select: {
  Option: ({
    index,
    value,
    children,
    context,
    width,
  }: OptionProps) => React.JSX.Element;
  OptionList: React.FC<{
    children: ReactNode;
    width?: string | undefined;
  }>;
  Provider: React.FC<SelectContextProviderProps>;
  Trigger: React.FC<{
    data?: SelectTriggerProps[] | undefined;
  }>;
};
export { Select, useSelectContext, SelectContextProps };
