import React, { createContext, useContext, useState } from 'react';

const PAGE = 1;
const PAGE_SIZE = 10;
const initialSearchConditions = {
  page: PAGE,
  pageSize: PAGE_SIZE,
};
// 객체의 key를 가져오는 타입 정의
export type SearchConditionKeys = keyof typeof initialSearchConditions;
// 각 key에 해당하는 값의 타입을 가져오는 타입 정의
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

const SearchConditionsContext = createContext<
  SearchConditionsContextProps | undefined
>(undefined);
const SearchConditionsProvider = ({
  children,
  pageName,
}: SearchConditionsProps) => {
  const [searchConditions, setSearchConditions] = useState(
    initialSearchConditions,
  );

  if (!pageName) {
    throw new Error(
      'SearchConditionsProvider 에 pageName props 값을 지정해 주세요.',
    );
  }

  const setValue = (key: SearchConditionKeys, value: any) => {
    setSearchConditions((prevSearchConditions) => ({
      ...prevSearchConditions,
      [key]: value,
    }));
  };

  const deleteValue = (key: SearchConditionKeys) => {
    setSearchConditions((prevSearchConditions) => {
      const updatedConditions = { ...prevSearchConditions };
      delete updatedConditions[key];
      return updatedConditions;
    });
  };

  return (
    <SearchConditionsContext.Provider
      value={{ searchConditions, setValue, deleteValue }}
    >
      {children}
    </SearchConditionsContext.Provider>
  );
};

const useSearchConditions = () => {
  const context = useContext(SearchConditionsContext);
  if (!context) {
    throw new Error(
      'useSearchConditions 는 SearchConditionsProvider 내부에서 사용되어야 합니다',
    );
  }
  return context;
};

export { SearchConditionsProvider, useSearchConditions };
