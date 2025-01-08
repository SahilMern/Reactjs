import { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';


const LiftingStateUp = () => {
  const [value, setValue] = useState(0);


  const handleValueChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <h1>Shared State: {value}</h1>
      <ChildComponentA value={value} onValueChange={handleValueChange} />
      <ChildComponentB value={value} onValueChange={handleValueChange} />
    </div>
  );
};


export default LiftingStateUp;
