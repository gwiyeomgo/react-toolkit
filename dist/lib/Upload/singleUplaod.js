import React, { useEffect, useState } from 'react';
import { FileUpload } from './fileUpload';
import DisplayImage from './displayImage';
export const SingleUpload = (props) => {
  const { imageFileOnly = false, onSave } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [src, setSrc] = useState('');
  const ref = React.createRef();
  useEffect(() => {
    var _a;
    const accept = imageFileOnly ? 'image/*' : '';
    if (accept != null) {
      (_a = ref.current) === null || _a === void 0
        ? void 0
        : _a.changeAccept(accept);
    }
  }, [imageFileOnly]);
  const removeImage = () => {
    var _a;
    setSelectedFile(null);
    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clear();
  };
  const selectFile = (image, src) => {
    setSelectedFile(image);
    setSrc(src);
    onSave(image)
      .then(() => {
        var _a;
        return (_a = ref.current) === null || _a === void 0
          ? void 0
          : _a.onSuccess();
      })
      .catch((reason) => {
        var _a;
        return (_a = ref.current) === null || _a === void 0
          ? void 0
          : _a.onError(reason);
      });
  };
  return React.createElement(
    'div',
    { style: { display: 'inline-block' } },
    React.createElement(FileUpload, { ref: ref, selectFile: selectFile }),
    React.createElement('br', null),
    selectedFile &&
      selectedFile.type.startsWith('image/') &&
      React.createElement(DisplayImage, { src: src, remove: removeImage }),
  );
};
