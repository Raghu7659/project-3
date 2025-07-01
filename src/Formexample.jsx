import React, { useState } from 'react';

const FormExample = () => {
  const [userName, setUserName] = useState("");

  const getUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    alert(userName);
    setUserName(""); // optional: clear input after submit
  };

  return (
    <section className='formsection'>
      <h2>{userName}</h2>
      <div className='inputDiv'>
        <input 
          type="text" 
          value={userName}
          placeholder="Enter your name" 
          onChange={getUserName}
        />
        <br />
        <button className='btn' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default FormExample;

