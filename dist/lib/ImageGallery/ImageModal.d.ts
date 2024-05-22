import React from 'react';
type imageModalProps = {
  clickedImg: string;
  handleRotationRight: () => void;
  handleRotationLeft: () => void;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};
export declare const ImageModal: ({
  clickedImg,
  handleRotationRight,
  handleRotationLeft,
  setClickedImg,
}: imageModalProps) => React.JSX.Element;
declare const _default: {
  ImageModal: ({
    clickedImg,
    handleRotationRight,
    handleRotationLeft,
    setClickedImg,
  }: imageModalProps) => React.JSX.Element;
};
export default _default;
