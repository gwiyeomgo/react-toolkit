import html2canvas from 'html2canvas';
import React from 'react';
import { Button, ButtonType } from '../Buttton/button';
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

type ViewCaptureButtonProps = {
  children?: React.ReactNode;
  downloadFileName: string;
  downloadButtonName: string;
  type?: ButtonType;
};

const ViewCaptureButton = ({
  children,
  downloadFileName,
  downloadButtonName,
  type,
}: ViewCaptureButtonProps) => {
  const saveAs = (blob: string, fileName: string) => {
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
  const exportAsPicture = (id: string) => {
    const data = document.getElementById(id);
    if (data) {
      html2canvas(data)
        ?.then((canvas) => {
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
  return (
    <div>
      <Button type={type} onClick={() => exportAsPicture('view')}>
        {downloadButtonName}
      </Button>
      <center>
        <View id="view" data-testid="test-view">
          <Content>{children}</Content>
        </View>
      </center>
    </div>
  );
};

export { ViewCaptureButton, ViewCaptureButtonProps };
