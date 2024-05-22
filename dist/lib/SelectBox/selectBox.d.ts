import React from 'react';
type SelectTriggerProps = {
  id: number;
  value: string;
  label: string;
};
declare const SelectBox: ({
  data,
}: {
  data: SelectTriggerProps[];
}) => React.JSX.Element;
export { SelectBox, SelectTriggerProps };
