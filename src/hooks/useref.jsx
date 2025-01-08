import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>HandleRef</button>
    </div>
  );
};

export default App;
