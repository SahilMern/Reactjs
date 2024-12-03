import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [value, setValue] = useState(0);
  const handleValue = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <Child onValueChange={handleValue} value={value} />
    </div>
  );
};

export default App;
