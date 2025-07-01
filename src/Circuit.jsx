
import React, { useState } from 'react';

const Circuit = () => {
  const [game, setGame] = useState(true);

  const MyGame = () => {
    return (
      <div>
        <h2>I like Cricketer Dhoni</h2>
      </div>
    );
  };

  return (
    <div>
      {game && <MyGame />}
    </div>
  );
};

export default Circuit;
