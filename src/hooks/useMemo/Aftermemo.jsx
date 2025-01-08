import { useMemo, useState } from "react";

const Aftermemo = () => {
  const [add, setAdd] = useState(0);
  const [minuus, setMinus] = useState(100);

  const handlePlus = () => {
    setAdd(add + 1);
  };

  const handleMinus = () => {
    setMinus(minuus - 1);
  };

  // The multiplication function will be re-calculated every render
  const multiplication = useMemo(() => {
    console.log("hello daty");
    
    return add*10
  },[])
    
  // const multiplication = () => {
  //   console.log("heheh");
    
  // }
    
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

export default Aftermemo;
