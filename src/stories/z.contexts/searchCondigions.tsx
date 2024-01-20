import {
  useSearchConditions,
  SearchConditionsProvider,
} from '../../lib/SeacrhConditions/searchConditions';
import { Button } from '../../lib/Buttton/button';
import React from 'react';

const DemoPage = ({ pageName }: { pageName: string }) => {
  const { searchConditions, setValue, deleteValue } = useSearchConditions();

  const setSearchCondition = (key: 'page' | 'pageSize', value: number) => {
    setValue(key, value);
  };

  const removeSearchCondition = (key: 'page' | 'pageSize') => {
    deleteValue(key);
  };

  return (
    <div>
      <p>페이지 ID: {pageName}</p>
      <p>페이지: {searchConditions && searchConditions.page}</p>
      <p>페이지 크기: {searchConditions && searchConditions.pageSize}</p>
      <Button onClick={() => setSearchCondition('page', 1)}>1</Button>
      <Button onClick={() => setSearchCondition('page', 2)}>2</Button>
      <Button onClick={() => setSearchCondition('page', 3)}>3</Button>
      <Button
        onClick={() => {
          removeSearchCondition('pageSize');
        }}
      >
        페이지 크기 제거
      </Button>
      <Button
        onClick={() => {
          setSearchCondition('pageSize', 10);
        }}
      >
        페이지 크기 추가
      </Button>
    </div>
  );
};

const SearchCondigions = () => {
  return (
    <SearchConditionsProvider pageName={'페이지1'}>
      <DemoPage pageName={'페이지1'} />
    </SearchConditionsProvider>
  );
};
export default SearchCondigions;
