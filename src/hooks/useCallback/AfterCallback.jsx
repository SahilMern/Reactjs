import { useState } from "react";
import CallbackChild from "./CallbackChild";

const AfterCallback = () => {
  const [data, setData] = useState(2);
  return (
    <div>
      AfterCallback

      <CallbackChild data={data} />
    </div>
  );
};

export default AfterCallback;
