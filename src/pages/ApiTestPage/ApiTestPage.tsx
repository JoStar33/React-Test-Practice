import React, { useEffect, useState } from 'react';

type todoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiTestPage = () => {
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((json) => setTodoList(json))
      .catch(() => {
        //문제는 이거지. 에러가 발생할리가 없는데 에러 화면이 어떻게 보일지 알고?
        setErrorMsg('에러 발생...');
      });
  }, []);
  return (
    <>
      {errorMsg && <h1>{errorMsg}</h1>}
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiTestPage;
