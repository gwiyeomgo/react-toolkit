import {useSearchConditions ,SearchConditionsProvider} from "@gwiyeomgo/react-toolkit" ;

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
            <button onClick={() => setSearchCondition("page", 1)}>1</button>
            <button onClick={() => setSearchCondition("page", 2)}>2</button>
            <button onClick={() => setSearchCondition("page", 3)}>3</button>
            <button
                onClick={() => {
                    removeSearchCondition("pageSize");
                }}
            >
                페이지 크기 제거
            </button>
            <button
                onClick={() => {
                    setSearchCondition("pageSize", 10);
                }}
            >
                페이지 크기 추가
            </button>
        </div>
    );
};

const App = () => {
    return (
        <SearchConditionsProvider pageName={"페이지1"}>
            <DemoPage pageName={"페이지1"} />
        </SearchConditionsProvider>
    );
};
export default App;
