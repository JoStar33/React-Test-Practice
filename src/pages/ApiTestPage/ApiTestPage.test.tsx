import { render, screen } from '@testing-library/react';
import ApiTestPage from './ApiTestPage';
import { server } from '../../mocks/server';
import { rest } from 'msw';

//재밌는건 이거임. 아래 테스트 통과 됐습니다. 왜 통과됐을까?
//mocks내에 서버를 통해 설정된 값을 기반으로 데이터를 가져왔기 때문이다.
test('Todo List', async () => {
  render(<ApiTestPage />);
  const lists = await screen.findAllByRole('listitem');
  expect(lists).toHaveLength(3);
});

//근데 왜 이렇게 에러가 났을 경우는 따로 빼내서 생각하는걸까?
//이유는 간단한데, 에러가 터지는 테스트 케이스를 확인하기위해 handler에
//작성한다면, 모든 코드에서 오류가 터진다.
//따라서 다음과 같이 에러테스트의 경우는 따로 api를 선언해서 작성하는게 좋다.
//이렇게 내부에 작성하면 테스트는 이 내부에서만 영향을 주게 된다.
test('에러가 났을 경우도 확인해보자.', async () => {
  server.use(
    rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<ApiTestPage />);
  const error = await screen.findByText('에러 발생...');
  expect(error).toBeInTheDocument();
});
