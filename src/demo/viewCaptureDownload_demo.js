import {
  ViewCaptureDownload
} from "@gwiyeomgo/react-toolkit";

function App() {
  return (
    <div className="App">
      <ViewCaptureDownload
        downloadFileName="test"
        downloadButtonName="download"
      >
        <div style={{
          padding: 0,
          backgroundColor:'skyblue'
        }}>{"test 데이터 입니다."}</div>
      </ViewCaptureDownload>
    </div>
  );
}

export default App;
