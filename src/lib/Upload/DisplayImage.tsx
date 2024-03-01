import React from 'react';
import styles from '../styles.module.css';
import { Icon } from '../Icon/icon';
interface Image {
  src: string;
  remove: () => void;
}

const DisplayImage = ({ src, remove }: Image) => {
  return (
    <div className={styles.squareImg}>
      <button className={styles.xButton} onClick={remove}>
        <Icon icon={'Cross'} color="white" width={'1rem'} height={'1rem'} />
      </button>
      <img className={styles.image} alt="not found" width={'100%'} src={src} />
    </div>
  );
};

export default DisplayImage;
