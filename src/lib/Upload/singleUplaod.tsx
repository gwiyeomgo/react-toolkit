import React, { useEffect, useState } from 'react';
import { FileUpload } from './fileUpload';
import DisplayImage from './displayImage';
import { FileUploadInputRef } from './fileUpload';
export type File = globalThis.File | null;

export interface SingleUploadProps {
  imageFileOnly?: boolean;
  onSave: (file: File) => Promise<void | null>;
}
export const SingleUpload = (props: SingleUploadProps) => {
  const { imageFileOnly = false, onSave } = props;
  const [selectedFile, setSelectedFile] = useState<File>(null);
  const ref = React.createRef<FileUploadInputRef>();

  useEffect(() => {
    const accept = imageFileOnly ? 'image/*' : '';
    if (accept != null) {
      ref.current?.changeAccept(accept);
    }
  }, [imageFileOnly]);

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
  const blobToObjectURL = (blob: Blob) => URL.createObjectURL(blob);
  return (
    <div style={{ display: 'inline-block' }}>
      <FileUpload ref={ref} selectFile={selectFile} />
      <br />
      {selectedFile && selectedFile.type.startsWith('image/') && (
        <DisplayImage
          src={blobToObjectURL(selectedFile)}
          remove={removeImage}
        />
      )}
    </div>
  );
};
