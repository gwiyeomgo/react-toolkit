import html2canvas from "html2canvas";
import "../styles.module.css";
import React, { createContext, useState } from "react";

const ViewCaptureDownloadContext = createContext();
const ViewCaptureDownload = ({
                               children,
                               downloadFileName,
                               downloadButtonName
                             }) => {
  const [testValue, setTestValue] = useState("기본값"); // 기본값으로 '기본값'을 설정합니다.
  const saveAs = (blob, fileName) => {
    const elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };
  const exportAsPicture = (id) => {
    const data = document.getElementById(id);
    html2canvas(data)
      .then((canvas) => {
        return canvas.toDataURL("image/png", 1.0);
      })
      .then((image) =>
        saveAs(image, downloadFileName ? `${downloadFileName}.png` : `file.png`)
      );
  };
  return (
    <ViewCaptureDownloadContext.Provider value={{ testValue, setTestValue }}>
      <button
        onClick={(val) => exportAsPicture("view")}
        type="primary"
        size="default"
      >
        {downloadButtonName}
      </button>
      <center>
        <div id="view" className="page">
          <div className="content">{children}</div>
        </div>
      </center>
    </ViewCaptureDownloadContext.Provider>
  );
};

export { ViewCaptureDownload };
