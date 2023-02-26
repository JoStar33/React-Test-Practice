import React, { useState } from 'react';

const UserEventPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleOnClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {
        isLogin 
          ? <div role="login">로그인</div>
          : <div role="logout">로그아웃</div>
      }
      <button onClick={handleOnClick}>버튼</button>
    </div>
  );
};

export default UserEventPage;