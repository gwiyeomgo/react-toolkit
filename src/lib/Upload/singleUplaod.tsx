import React, { useEffect, useState } from 'react';
import { FileUpload } from './fileUpload';
import ImagePopup from './displayImage';
import { FileUploadInputRef } from './fileUpload';

export type File = Blob | null;

export interface SingleUploadProps {
  isImageFile?: boolean;
  onSave: (file: File) => Promise<void | null>;
}
export const SingleUpload = (props: SingleUploadProps) => {
  const { isImageFile = false, onSave } = props;
  const [selectedFile, setSelectedFile] = useState<File>(null);
  const ref = React.createRef<FileUploadInputRef>();

  useEffect(() => {
    const accept = isImageFile ? 'image/*' : '';
    if (accept != null) {
      ref.current?.changeAccept(accept);
    }
  }, [isImageFile]);

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
    <div style={{ display: 'inline-block' }}>
      <FileUpload ref={ref} selectFile={selectFile} />
      <br />
      {selectedFile && isImageFile && (
        <ImagePopup
          src={URL.createObjectURL(selectedFile)}
          remove={removeImage}
        />
      )}
    </div>
  );
};
