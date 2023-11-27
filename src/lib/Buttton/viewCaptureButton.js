import html2canvas from 'html2canvas';
import React, { createContext, useState } from 'react';
import { Button } from './button';
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
const ViewCaptureContext = createContext();
const ViewCaptureButton = ({
  children,
  downloadFileName,
  downloadButtonName,
  type,
  color,
}) => {
  const [testValue, setTestValue] = useState('');
  const saveAs = (blob, fileName) => {
    const elem = window.document.createElement('a');
    elem.href = blob;
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    } else {
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
    const data = document.getElementById(id);
    html2canvas(data)
      .then((canvas) => {
        return canvas.toDataURL('image/png', 1.0);
      })
      .then((image) =>
        saveAs(
          image,
          downloadFileName ? `${downloadFileName}.png` : `file.png`,
        ),
      );
  };
  return (
    <ViewCaptureContext.Provider value={{ testValue, setTestValue }}>
      <Button type={type} color={color} onClick={() => exportAsPicture('view')}>
        {downloadButtonName}
      </Button>
      <center>
        <View id="view">
          <Content>{children}</Content>
        </View>
      </center>
    </ViewCaptureContext.Provider>
  );
};

export { ViewCaptureButton };
