import {
  useSearchConditions,
  SearchConditionsProvider,
  Button,
} from '@gwiyeomgo/react-toolkit';

const DemoPage = ({ pageName }) => {
  const { searchConditions, setValue, deleteValue } = useSearchConditions();

  const setSearchCondition = (key, value) => {
    setValue(key, value);
  };

  const removeSearchCondition = (key) => {
    deleteValue(key);
  };

  return (
    <div>
      <p>페이지 ID: {pageName}</p>
      <p>페이지: {searchConditions.page}</p>
      <p>페이지 크기: {searchConditions.pageSize}</p>
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

const App = () => {
  return (
    <SearchConditionsProvider pageName={'페이지1'}>
      <DemoPage pageName={'페이지1'} />
    </SearchConditionsProvider>
  );
};
export default App;
