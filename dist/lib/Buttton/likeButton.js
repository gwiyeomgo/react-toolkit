import { useState } from 'react';
import * as React from 'react';
import { Icon } from '../Icon/icon';
const LikeButton = ({
  onClick,
  width = '20px',
  height = '20px',
  initLiked,
  color = '#F75BA0',
}) => {
  const [liked, setLiked] = useState(initLiked);
  const handleClick = () => {
    setLiked(!liked);
    // 좋아요 이벤트를 발송
    onClick({ liked: !liked });
  };
  return React.createElement(
    'button',
    {
      style: {
        border: 0,
        outline: 0,
        background: 'transparent',
        cursor: 'pointer',
      },
      onClick: handleClick,
    },
    liked
      ? React.createElement(Icon, {
          width: '20px',
          height: '20px',
          color: color,
          icon: 'Heart',
        })
      : React.createElement(Icon, {
          width: width,
          height: height,
          color: color,
          icon: 'EmptyHeart',
        }),
  );
};
export { LikeButton };
