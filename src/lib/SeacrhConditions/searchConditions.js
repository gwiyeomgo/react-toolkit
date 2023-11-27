import React, { createContext, useContext, useState } from 'react';

const SearchConditionsContext = createContext(undefined);
const PAGE = 1;
const PAGE_SIZE = 10;
const initialSearchConditions = {
  page: PAGE,
  pageSize: PAGE_SIZE,
};
const SearchConditionsProvider = ({ children, pageName }) => {
  const [searchConditions, setSearchConditions] = useState(
    initialSearchConditions,
  );

  if (!pageName) {
    throw new Error(
      'SearchConditionsProvider 에 pageName props 값을 지정해 주세요.',
    );
  }

  const setValue = (key, value) => {
    setSearchConditions((prevSearchConditions) => ({
      ...prevSearchConditions,
      [key]: value,
    }));
  };

  const deleteValue = (key) => {
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
