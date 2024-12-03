import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    // Modify the backgroundColor using the style property
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
