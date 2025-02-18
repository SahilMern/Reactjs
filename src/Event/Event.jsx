import { useState } from "react";
import Child from "./Child";

const Event = () => {
    const [data, setData] = useState(0)
    const handleData = () => {
        setData(data+1)
    }
  return (
    <div>
      Event{data}
      <Child  handleData={handleData} />
    </div>
  );
};

export default Event;
