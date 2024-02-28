import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import DisplayImage from './DisplayImage';
import { FileUploadInputRef } from '../Upload/FileUpload';

export type File = Blob | null;

export interface SingleUploadProps {
  isImageFile?: boolean;
  onSave: (file: File) => Promise<void | null>;
}
export const SingleUpload = (props: SingleUploadProps) => {
  const { isImageFile = false, onSave } = props;
  const [selectedFile, setSelectedFile] = useState<File>(null);
  const ref = React.createRef<FileUploadInputRef>();
  const removeImage = () => {
    setSelectedFile(null);
    ref.current?.clear();
  };
  const selectFile = (image: File) => {
    setSelectedFile(image);
    onSave(image)
      .then(() => ref.current?.onSuccess())
      .catch((reason) => ref.current?.onError(reason));
  };

  return (
    <div>
      <FileUpload ref={ref} isImageFile={isImageFile} selectFile={selectFile} />
      <br />
      {selectedFile && isImageFile && (
        <DisplayImage
          src={URL.createObjectURL(selectedFile)}
          remove={removeImage}
        />
      )}
    </div>
  );
};
