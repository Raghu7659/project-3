import React, { useState } from 'react';

const ClickEvent = () => {
  const [number, setNumber] = useState(0);

  const increament = () => {
    setNumber(number + 1);
  };

  const decreament = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};

export default ClickEvent;
