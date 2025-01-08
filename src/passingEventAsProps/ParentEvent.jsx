import React, { useState } from 'react';
import ChildComponent from './Children';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello, World!');

  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
