import { useState } from 'react';
import * as React from 'react';
import { Icon } from '../Icon/icon';

type LikeButtonProps = {
  initLiked?: boolean;
  onClick: (data: any) => void;
  color?: string;
  width?: string;
  height?: string;
};
const LikeButton = ({
  onClick,
  width = '20px',
  height = '20px',
  initLiked,
  color = '#F75BA0',
}: LikeButtonProps) => {
  const [liked, setLiked] = useState(initLiked);

  const handleClick = () => {
    setLiked(!liked);
    // 좋아요 이벤트를 발송
    onClick({ liked: !liked });
  };

  return (
    <button
      style={{
        border: 0,
        outline: 0,
        background: 'transparent',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {liked ? (
        <Icon width={'20px'} height={'20px'} color={color} icon={'Heart'} />
      ) : (
        <Icon width={width} height={height} color={color} icon={'EmptyHeart'} />
      )}
    </button>
  );
};

export { LikeButton };
