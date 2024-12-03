import { useMemo, useState } from "react";


const UseMemos = () => {
  const [addition, setAddition] = useState(0);
  const [sub, setSub] = useState(100);


  const multiplication = useMemo(() => {
    console.log("Multiplication calculation");
    return addition * 10;
  }, [addition]);


  const handleAddition = () => {
    setAddition(addition + 1);
  };


  const handleSubtraction = () => {
    setSub(sub - 1);
  };


  return (
    <>
      {multiplication}
      <br />
      <button onClick={handleAddition}>Addition</button>
      <span>{addition}</span>
      <br />
      <button onClick={handleSubtraction}>Subtraction</button>
      <span>{sub}</span>
    </>
  );
};


export default UseMemos;