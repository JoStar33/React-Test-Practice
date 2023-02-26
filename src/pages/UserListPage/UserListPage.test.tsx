import { render, screen } from "@testing-library/react";
import UserListPage from "./UserListPage";

type userType = {
  name: string,
  age: number,
  phoneNumber: string
}

const users: userType[] = [{
  name: "안녕",
  age: 23,
  phoneNumber: "000"
}, {
  name: "민수",
  age: 25,
  phoneNumber: "000"
}, {
  name: "수잔",
  age: 27,
  phoneNumber: "000"
}]

test("ul이 있다.", () => {
  render(<UserListPage/>)
  const ulEl = screen.getByRole("list");
  expect(ulEl).toBeInTheDocument();
});

//이렇게 여러개의 요소들이 제대로 반영되었는지 확인해볼 수 있겠다.
//참고로 getByQuery로 무언가를 찾을때 요소가 없다면 아예 오류나니까 참고.
//따라서 요소가 없을때는 queryByRole을 통해 가져오는 방법이 있다. 
test("li는 3개이상 나오는지 테스트", () => {
  render(<UserListPage users={users}/>)
  const liElement = screen.getAllByRole("listitem");
  expect(liElement).toHaveLength(users.length);
});