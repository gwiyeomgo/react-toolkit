import React from 'react';
export type File = globalThis.File | null;
export type SingleUploadProps = {
  imageFileOnly?: boolean;
  onSave: (file: File) => Promise<void | null>;
};
export declare const SingleUpload: (
  props: SingleUploadProps,
) => React.JSX.Element;
