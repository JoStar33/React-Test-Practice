import LikeButton from '@/components/LikeButton';
import { postProductLike } from '@/apis/like';
import React from 'react';

export default function LikePage() {
  const [isLikeClick, setIsLikeClick] = React.useState(false);
  const handleClick = () => {
    postProductLike();
    setIsLikeClick((prev) => !prev);
  };
  return <LikeButton isLikeClick={isLikeClick} handleClick={handleClick} />;
}
