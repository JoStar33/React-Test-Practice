import { S } from './LikeButton.style';
import Icon from '@/icons';

interface Props {
  isLikeClick: boolean;
  handleClick: () => void;
}

export default function LikeButton({ isLikeClick, handleClick }: Props) {
  return (
    <S.LikeButton onClick={handleClick}>{isLikeClick ? <Icon name="LikeColor1" /> : <Icon name="LikeColor2" />}좋아요 버튼</S.LikeButton>
  );
}
