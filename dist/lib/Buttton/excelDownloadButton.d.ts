import React from 'react';
import { ButtonType } from './button';
declare const ChildCSVLink: React.ForwardRefExoticComponent<
  Omit<any, 'ref'> & React.RefAttributes<unknown>
>;
type ExcelDownloadButtonProps = {
  headers: {
    label: string;
    key: string;
  }[];
  fileName: string;
  buttonName: string;
  fetchData: () => any;
  style?: React.CSSProperties;
  type?: ButtonType;
};
declare const ExcelDownloadButton: {
  (props: ExcelDownloadButtonProps): React.JSX.Element;
  displayName: string;
};
export { ChildCSVLink, ExcelDownloadButton, ExcelDownloadButtonProps };
