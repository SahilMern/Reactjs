import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Expensive calculation function
  const expensiveComputation = () => {
    console.log("Calculating..."); // This will log only once
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  // Memoizing the result of expensiveComputation
  const result = useMemo(() => expensiveComputation(), []);  // Empty dependency array means it's calculated only once

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computation Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
