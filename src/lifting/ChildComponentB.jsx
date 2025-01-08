import React from 'react';


const ChildComponentB = ({ value, onValueChange }) => {
  return (
    <div>
      <p>Value in B: {value}</p>
      <button onClick={() => onValueChange(value - 1)}>Decrement in B</button>
    </div>
  );
};


export default ChildComponentB;