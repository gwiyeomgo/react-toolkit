import React from 'react';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import styled from 'styled-components';
const Gallery = styled.div``;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
`;
const Item = styled.div`
  flex: 0 1 calc(33.3% - 2px); /* 25% width with a 2px gap accounted for */
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 0 3px 6px 3px;
`;
const ImageGallery = ({ data }) => {
  const [clickedImg, setClickedImg] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const handleRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  const handleRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return React.createElement(
    Gallery,
    null,
    React.createElement(
      Row,
      null,
      data.length > 0 &&
        data.map((item, index) =>
          React.createElement(
            Item,
            { key: index },
            React.createElement(Image, {
              role: 'img',
              src: item.preview_link,
              alt: item.alt,
              onClick: () => handleClick(item, index),
            }),
          ),
        ),
    ),
    clickedImg &&
      React.createElement(ImageModal, {
        clickedImg: clickedImg,
        handleRotationRight: handleRotationRight,
        handleRotationLeft: handleRotationLeft,
        setClickedImg: setClickedImg,
      }),
  );
};
export { ImageGallery };
