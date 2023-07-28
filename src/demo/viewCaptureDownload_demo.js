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
        <div className="content">{"test"}</div>
      </ViewCaptureDownload>
    </div>
  );
}

export default App;
