import React from 'react';
import styles from '../styles.module.css';
import { Icon } from '../Icon/icon';
//https://bitkunst.tistory.com/entry/CSS-%EC%9D%91%EC%9A%A92-layer-popup-%EB%A7%8C%EB%93%A4%EA%B8%B0
//https://www.loginradius.com/blog/engineering/simple-popup-tutorial/
//https://stackoverflow.com/questions/33336396/html-css-close-button-overlapping-right-upper-corner
const DisplayImages = ({ src, remove }) => {
  return React.createElement(
    'div',
    { className: styles.squareImg },
    React.createElement(
      'button',
      { role: 'button', className: styles.xButton, onClick: remove },
      React.createElement(Icon, {
        icon: 'Cross',
        color: 'white',
        width: '1rem',
        height: '1rem',
      }),
    ),
    React.createElement('img', {
      className: styles.image,
      alt: 'not found',
      width: '100%',
      src: src,
    }),
  );
};
export default DisplayImages;
