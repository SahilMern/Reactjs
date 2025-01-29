import React, { useState, useTransition } from "react";

const UseTransitionExample = () => {
  const [pending, startTransition] = useTransition();

  const handleTransition = () => {
    startTransition(async() => {
      await new Promise(res=> setTimeout(res, 2000))
    });
  };

  return (
    <div>
      <button onClick={handleTransition}>
      </button>
    </div>
  );
};

export default UseTransitionExample;
