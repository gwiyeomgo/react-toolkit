import { Icon } from '../Icon/icon';
import styled from 'styled-components';
import React from 'react';
import styles from '../styles.module.css';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
  z-index: 100;
`;
const OverlayImage = styled.img`
  display: block;
  max-width: 80%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export const ImageModal = ({
  clickedImg,
  handleRotationRight,
  handleRotationLeft,
  setClickedImg,
}) => {
  const handleClick = (e) => {
    const target = e.target;
    if (target && target.classList.contains('dismiss')) {
      setClickedImg('');
    }
  };
  return React.createElement(
    Overlay,
    { className: 'overlay dismiss', onClick: handleClick },
    React.createElement(OverlayImage, {
      src: clickedImg,
      alt: 'original size',
    }),
    React.createElement(Icon, {
      color: 'white',
      onClick: handleRotationRight,
      className: styles.arrowsRight,
      icon: 'ArrowRight',
    }),
    React.createElement(Icon, {
      color: 'white',
      onClick: handleRotationLeft,
      className: styles.arrowsLeft,
      icon: 'ArrowLeft',
    }),
  );
};
export default { ImageModal };
