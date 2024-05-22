import { File } from './singleUplaod';
import React from 'react';
export declare const FILE_MAX_SIZE: number;
export type FileUploadProps = {
  selectFile: (p: File | null, s: string) => void;
  placeholder?: string;
};
export type FileUploadInputRef = {
  clear: () => void;
  changeAccept: (str: string) => void;
  onSuccess: () => void;
  onError: (reason: any) => void;
};
declare const FileUpload: React.ForwardRefExoticComponent<
  FileUploadProps & React.RefAttributes<FileUploadInputRef>
>;
export { FileUpload };
