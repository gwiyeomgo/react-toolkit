import React from 'react';
type Image = {
  src: string;
  remove: () => void;
};
declare const DisplayImages: ({ src, remove }: Image) => React.JSX.Element;
export default DisplayImages;
