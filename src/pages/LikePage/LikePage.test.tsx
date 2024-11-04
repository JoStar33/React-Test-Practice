import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import LikePage from '.';

const user = userEvent.setup();
describe('LikePage', () => {
  it('버튼 클릭 시 API 통신 후 하트 색상이 노란색으로 변경되는지 테스트', async () => {
    // 컴포넌트 렌더링
    render(<LikePage />);

    // 버튼 요소 선택
    const button = screen.getByRole('button', { name: /좋아요 버튼/i });

    // 버튼 클릭
    user.click(button);

    // 비동기 API 요청이 끝나고 하트 색상이 노란색으로 바뀌는지 검사
    await waitFor(() => {
      const heartIcon = screen.getByTestId('heart-icon');
      expect(heartIcon).toHaveStyle('background-color: #FCFF4B');
    });
  });
});
