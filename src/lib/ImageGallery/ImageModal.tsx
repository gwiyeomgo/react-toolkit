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

type imageModalProps = {
  clickedImg: string;
  handleRotationRight: () => void;
  handleRotationLeft: () => void;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};

export const ImageModal = ({
  clickedImg,
  handleRotationRight,
  handleRotationLeft,
  setClickedImg,
}: imageModalProps) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.classList.contains('dismiss')) {
      setClickedImg('');
    }
  };

  return (
    <Overlay className="overlay dismiss" onClick={handleClick}>
      <OverlayImage src={clickedImg} alt="original size" />
      <Icon
        color={'white'}
        onClick={handleRotationRight}
        className={styles.arrowsRight}
        icon={'ArrowRight'}
      />
      <Icon
        color={'white'}
        onClick={handleRotationLeft}
        className={styles.arrowsLeft}
        icon={'ArrowLeft'}
      />
    </Overlay>
  );
};

export default { ImageModal };
