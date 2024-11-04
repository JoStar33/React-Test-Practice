import React, { useEffect, useState } from 'react';

const FindByRolePage = () => {
  const [titleShow, setTitleShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTitleShow(!titleShow);
    }, 1500);
  });
  return <div>{titleShow && <h1>이제 보입니다.</h1>}</div>;
};

export default FindByRolePage;
