다른 코드들은 전부 화면에 렌더가 됐는지 정도만 확인했었다.

하지만 이번에는 그렇게 안하고 유저 이벤트(click, drag & drop, change)를 테스트 하는 방법에 대해서 알아보도록 하자.

참고로 userEvent는 13버전이 더이상 지원되지 않고있다. 그래서 14버전을 따라 설치해줘야한다.

npm i --save @testing-library/user-event