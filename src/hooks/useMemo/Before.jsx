import { useMemo, useState } from "react";

const App = () => {
  const [add, setAdd] = useState(0);
  const [minuus, setMinus] = useState(100);

  const handlePlus = () => {
    setAdd(add + 1);
  };

  const handleMinus = () => {
    setMinus(minuus - 1);
  };

  // Memoizing the multiplication result to avoid recalculating it on every render
  const multiplication = useMemo(() => {
    console.log("hello"); // This will only run when `add` changes
    return add * 10;
  }, [add]); // Dependency array: Recalculate only when `add` changes

  return (
    <>
      <div>{multiplication}</div>
      <br />
      <div>{add}</div>
      <br />
      <button onClick={handlePlus}>Plus</button>
      <br />
      <div>{minuus}</div>
      <br />
      <button onClick={handleMinus}>Minus</button>
    </>
  );
};

export default App;
