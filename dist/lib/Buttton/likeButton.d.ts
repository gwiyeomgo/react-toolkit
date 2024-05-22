import * as React from 'react';
type LikeButtonProps = {
  initLiked?: boolean;
  onClick: (data: any) => void;
  color?: string;
  width?: string;
  height?: string;
};
declare const LikeButton: ({
  onClick,
  width,
  height,
  initLiked,
  color,
}: LikeButtonProps) => React.JSX.Element;
export { LikeButton };
