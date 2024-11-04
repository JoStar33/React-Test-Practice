import { S } from './LikeButton.style';

interface Props {
  isLikeClick: boolean;
  handleClick: () => void;
}

export default function LikeButton({ isLikeClick, handleClick }: Props) {
  return <S.LikeButton>좋아요 버튼</S.LikeButton>;
}
