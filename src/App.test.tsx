import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //앱 렌더후
  render(<App />);
  //스크린 객체를 통해 DOM 요소에 접근 가능.
  const linkElement = screen.getByText(/learn react/i);
  //linkElement가 Document안에 있는지 검사.
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미지가 잘 나온다.", () => {
  render(<App/>);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
})
