import React from 'react';
declare const initialSearchConditions: {
  page: number;
  pageSize: number;
};
export type SearchConditionKeys = keyof typeof initialSearchConditions;
export type SearchConditionKValueTypes = {
  [K in SearchConditionKeys]: (typeof initialSearchConditions)[K];
};
export type SearchConditionsContextProps = {
  searchConditions?: SearchConditionKValueTypes;
  setValue: (key: SearchConditionKeys, value: any) => void;
  deleteValue: (key: SearchConditionKeys) => void;
};
export type SearchConditionsProps = {
  children?: React.ReactNode;
  pageName?: string;
};
declare const SearchConditionsProvider: ({
  children,
  pageName,
}: SearchConditionsProps) => React.JSX.Element;
declare const useSearchConditions: () => SearchConditionsContextProps;
export { SearchConditionsProvider, useSearchConditions };
