import { useState } from "react";

const Test = () => {
  const [adddata, setAdddata] = useState(0);
  const [minData, setminData] = useState(100);

  const addition = () => {
    console.log(adddata * 10);
  };
  const add = () => {
    setAdddata(adddata + 1);
  };
  const min = () => {
    setminData(minData - 1);
  };
  return (
    <>
      {addition()}
      <div>
        Test :- {adddata} and {minData}
      </div>
      <button onClick={add}>Add</button>
      <br />
      <button onClick={min}>min</button>
    </>
  );
};

export default Test;
