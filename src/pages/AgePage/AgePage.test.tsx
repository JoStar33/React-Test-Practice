import { render, screen } from '@testing-library/react';
import AgePage from './AgePage';

//색상 가져와보는 과정.
test('19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색.', () => {
  render(<AgePage age={10} />);
  const btnEl = screen.getByRole('button');
  const txtEl = screen.getByRole('19_down');
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(txtEl).toHaveStyle({
    color: 'red',
  });
});

test('19세 이상이면 버튼을 클릭할 수 있다. 안내문구는 하얀색.', () => {
  render(<AgePage age={20} />);
  const btnEl = screen.getByRole('button');
  const txtEl = screen.getByRole('19_up');
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(txtEl).toHaveStyle({
    color: 'white',
  });
});
