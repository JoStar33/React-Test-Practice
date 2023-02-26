import { render, screen } from "@testing-library/react";
import MyPage from "../MyPage/MyPage";

test("유저가 없을 경우는?", () => {
  render(<MyPage/>);
  const txtEl = screen.getByText(/로그인하기:/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  //으하핳과 같은 이상한 텍스트를 넣어놓으면 테스트 실패.
  expect(btnEl).toHaveTextContent("로그인");
});


const user = {
  name: "jojo",
  phoneNumber: "010101010",
  age: 26
};
//유저 객체가 존재한다면.
test("유저가 있는 경우는?", () => {
  render(<MyPage user={user}/>);
  const txtEl = screen.getByText(/어서오세요. jojo님/);
  expect(txtEl).toBeInTheDocument();
});