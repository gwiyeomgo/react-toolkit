import {
  ViewCaptureButton
} from "@gwiyeomgo/react-toolkit";

function App() {
  return (
    <div className="App">
      <ViewCaptureButton
        downloadFileName="test"
        downloadButtonName="download"
      >
        <div style={{
          padding: 0,
          backgroundColor:'skyblue'
        }}>{"test 데이터 입니다."}</div>
      </ViewCaptureButton>
    </div>
  );
}

export default App;
