import React from 'react';
interface Image {
  src: string;
  remove: () => void;
}
const DisplayImage = ({ src, remove }: Image) => {
  return (
    <div>
      <img alt="not found" width={'250px'} src={src} />
      <br />
      <button onClick={remove}>Remove</button>
    </div>
  );
};

export default DisplayImage;
