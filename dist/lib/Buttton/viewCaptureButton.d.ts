import React from 'react';
import { ButtonType } from '../Buttton/button';
type ViewCaptureButtonProps = {
  children?: React.ReactNode;
  downloadFileName: string;
  downloadButtonName: string;
  type?: ButtonType;
};
declare const ViewCaptureButton: ({
  children,
  downloadFileName,
  downloadButtonName,
  type,
}: ViewCaptureButtonProps) => React.JSX.Element;
export { ViewCaptureButton, ViewCaptureButtonProps };
