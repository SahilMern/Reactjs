import { useState } from "react";
import LiftChildren from "./LiftChildren";

const LiftParent = () => {
    const [userRollNumber, setUsernRollNumber] = useState(0)
  return (
    <div>
        <p>UserRollNumber:-{userRollNumber}</p>
      <LiftChildren setUsernRollNumber={setUsernRollNumber}  />
    </div>
  );
};

export default LiftParent;
