import React from 'react';
import {userData} from './Data';

console.log(userData);

const SampleArray = () => {
  return (
    <div>
      {userData.map((user) => (
        <div key={user.username} style={{ border: '1px solid blue', padding: '10px', marginBottom: '10px' }}>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.address.street}</div>
        </div>
      ))}
    </div>
  );
};

export default SampleArray;
