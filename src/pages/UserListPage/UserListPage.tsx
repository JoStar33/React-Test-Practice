import React from 'react';

type userType = {
  name: string,
  age: number,
  phoneNumber: string
}

type propsType = {
  users?: userType[]
}

const UserListPage = ({ users }: propsType) => {
  return (
    <ul>
      {
        users?.map(user => 
          <li key={user.name}>
            {
              user.name
            }
          </li>)
      }
    </ul>
  );
};

export default UserListPage;