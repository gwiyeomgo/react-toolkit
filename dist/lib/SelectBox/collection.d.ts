import React from 'react';
type CollectionContextProps = {
  itemMap: React.MutableRefObject<Map<any, any>>;
};
export declare const CollectionContext: React.Context<
  CollectionContextProps | undefined
>;
type CollectionProviderProps = {
  children?: React.ReactNode;
};
type CollectionItemProps = {
  index: number;
  value: string | number | boolean;
  children?: React.ReactNode;
  onSelectValue?: (value: React.ReactNode) => void;
};
declare function CollectionItem({
  index,
  value,
  children,
  onSelectValue,
}: CollectionItemProps): React.JSX.Element;
declare function useCollection(): {
  getItems: () => {
    index: number;
    value: any;
    ref: any;
  }[];
  focusItem: (v: React.ReactNode) => void;
};
declare const Collection: {
  Provider: React.FC<CollectionProviderProps>;
  Item: typeof CollectionItem;
};
export { Collection, useCollection };
