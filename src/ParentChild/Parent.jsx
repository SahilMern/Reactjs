import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const sendTochild = () => {
    console.log("Helllo mai to child ko jaa raha hu");
  };
  const [add, setAdd] = useState(0);
  return (
    <>
      <Child functionToChild={sendTochild} />
      <div>Data {add}</div>
      <button onClick={() => setAdd(add + 1)}>Add button</button>
    </>
  );
};

export default Parent;
