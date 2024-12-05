import React, { useCallback, useState } from "react";
import ChildForCallback from "./ChildForCallback";

const App = () => {
  const [add, setAdd] = useState(0);

  const handlePlus = () => {
    setAdd(add + 1);
  };

  const learing = useCallback(() => {
    console.log("heeelo");
    
  }, [])
  return (
    <>
      {add}
      <button onClick={handlePlus}>Plus</button>
      <ChildForCallback  learning={learing} />
    </>
  );
};

export default App;
