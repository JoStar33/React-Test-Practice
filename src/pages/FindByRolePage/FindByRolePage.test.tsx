import { render, screen } from '@testing-library/react';
import FindByRolePage from './FindByRolePage';

test('늦게보이는 페이지에 대해 대응하는 방법을 알아보죠.', async () => {
  render(<FindByRolePage />);
  const titleEl = await screen.findByRole(
    'heading',
    {
      name: '이제 보입니다.',
    },
    {
      timeout: 2000,
    },
  );
  expect(titleEl).toBeInTheDocument();
});
