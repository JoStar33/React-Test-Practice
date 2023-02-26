import React from 'react';

type userType = {
  name: string,
  phoneNumber: string,
  age: number
}

type propsType = {
  user?: userType
}

const MyPage = ({ user }: propsType) => {
  return (
    <div>
      {
        user 
        ? <div>어서오세요. { user.name }님</div>
        : <div>로그인하기: <button>로그인</button></div>
      }
    </div>
  );
};

export default MyPage;