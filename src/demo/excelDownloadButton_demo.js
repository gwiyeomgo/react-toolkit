import { ExcelDownloadButton } from "@gwiyeomgo/react-toolkit";

const App = () => {
  const headers = [
    { label: "User ID", key: "userId" },
    { label: "ID", key: "id" },
    { label: "Title", key: "title" },
    { label: "Body", key: "body" }
  ];

  const fetchData = async () => {
    try {
      // 비동기적으로 데이터를 조회하는 비즈니스 로직을 구현
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 2초 동안 대기

      // 목데이터 생성 (실제로는 API 호출 등으로 데이터를 가져와야 함)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  return (
      <ExcelDownloadButton
        headers={headers}
        fileName={"text.csv"}
        fetchData={fetchData}
        buttonName="다운로드"
      />
  );
}
export default App;