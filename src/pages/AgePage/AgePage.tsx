import React from 'react';

type propsType = {
  age: number
}

const AgePage = ({age}: propsType) => {
  return (
    <>
      <button disabled={age < 19}>가입</button>
      {
        age < 19 
          ? <div role="19_down" style={{ color: "red" }}>성인만 가입할 수 있습니다.</div>
          : <div role="19_up" style={{ color: "white" }}>성인만 가입할 수 있습니다.</div>
      }
    </>
  );
};

export default AgePage;