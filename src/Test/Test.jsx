import { useRef } from "react";

const Test = () => {
  const inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.style.backgroundColor = "red"; // Apply the style directly
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Test;
