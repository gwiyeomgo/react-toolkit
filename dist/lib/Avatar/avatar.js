import React from 'react';
import styles from '../styles.module.css';
const Avatar = (props) => {
  return React.createElement(
    'div',
    { className: styles.avatar, style: Object.assign({}, props.style) },
    React.createElement('img', {
      src: props.src,
      style: {
        width: '100%',
        height: '100%',
        borderRadius: props.imageBorderRadius ? props.imageBorderRadius : 50,
      },
      alt: 'avatar',
    }),
  );
};
export { Avatar };
