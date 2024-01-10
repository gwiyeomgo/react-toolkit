import React from 'react';
import { CSSProperties } from 'react';
import styles from '../styles.module.css';
export interface AvatarProps {
  style?: CSSProperties;
  src?: string;
  imageBorderRadius?: number;
}

const Avatar = (props: AvatarProps) => {
  return (
    <div
      className={styles.avatar}
      style={{
        ...props.style,
      }}
    >
      <img
        src={props.src}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: props.imageBorderRadius ? props.imageBorderRadius : 50,
        }}
        alt={'avatar'}
      />
    </div>
  );
};
export { Avatar };
