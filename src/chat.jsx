// src/Resize.js
import React, { useState, useEffect } from 'react';

const Resize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div>
      <h1>Screen Size Example</h1>
      <p style={{ color: 'blue' }}>Width: {screenSize.width}px</p>
      <p style={{ color: 'blue' }}>Height: {screenSize.height}px</p>
    </div>
  );
};

export default Resize;
