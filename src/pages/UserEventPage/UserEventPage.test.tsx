import { render, screen } from "@testing-library/react";
import UserEventPage from "./UserEventPage";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("이벤트 테스트", async () => {
  render(<UserEventPage/>)
  const btnEl = screen.getByRole("button"); 
  let divTagInfo
  //보고 있는 것처럼 user.click이라는 행위자체는 promise다.
  //따라서 다음과 같이 click을 하고나서 then을 주는게 가능.
  await user.click(btnEl)
    .then(() => {
      divTagInfo = screen.getByRole("login");
      expect(divTagInfo).toHaveTextContent("로그인");
    });
});

test("tab, space, enter 동작", async () => {
  render(<UserEventPage/>);
  await user.tab(); //키입력을 감지할때에는 다음과 같이 tab();을 같이 써줘야한다.
  await user.keyboard(" "); //이동작은 스페이스
  await user.keyboard("{Enter}"); //이동작은 엔터.
});

//일단 이정도로 멈췄지만 다양한 이벤트 테스트 함수들이 있으니 적절하게 사용하도록 하자.