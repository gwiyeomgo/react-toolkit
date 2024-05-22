import React, { CSSProperties } from 'react';
type SortableListProps = {
  initialList: string[];
  height: number;
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
};
declare const SortableList: React.FC<SortableListProps>;
export { SortableList };
