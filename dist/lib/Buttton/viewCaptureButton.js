import html2canvas from 'html2canvas';
import React from 'react';
import { Button } from '../Buttton/button';
import styled from 'styled-components';
const View = styled.div`
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  margin: 10mm auto;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  padding: 0;
`;
const ViewCaptureButton = ({
  children,
  downloadFileName,
  downloadButtonName,
  type,
}) => {
  const saveAs = (blob, fileName) => {
    const elem = window.document.createElement('a');
    elem.href = blob;
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    } else {
      //새로운 창이나 탭에서 링크를 열도록 브라우저에 지시
      elem.target = '_blank';
      elem.dispatchEvent(
        new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        }),
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };
  const exportAsPicture = (id) => {
    var _a;
    const data = document.getElementById(id);
    if (data) {
      (_a = html2canvas(data)) === null || _a === void 0
        ? void 0
        : _a
            .then((canvas) => {
              return canvas.toDataURL('image/png', 1.0);
            })
            .then((image) =>
              saveAs(
                image,
                downloadFileName ? `${downloadFileName}.png` : `file.png`,
              ),
            );
    }
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { type: type, onClick: () => exportAsPicture('view') },
      downloadButtonName,
    ),
    React.createElement(
      'center',
      null,
      React.createElement(
        View,
        { id: 'view', 'data-testid': 'test-view' },
        React.createElement(Content, null, children),
      ),
    ),
  );
};
export { ViewCaptureButton };
