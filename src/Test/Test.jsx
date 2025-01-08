import { useReducer } from "react";

const Test = () => {
  // Correct spelling of `initialState`
  const initialState = 85;

  // Reducer function should handle actions
  const reducer = (state, action) => {
    console.log(state, action); // This will log the current state and the action

    switch (action.type) {
      case "Increment":
        return state + 1; // Increment the state
      case "Decrement":
        return state - 1; // Decrement the state
      default:
        return state; // Return the current state if no action matches
    }
  };

  // useReducer hook to handle state and dispatch
  const [stateValue, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>State Value: {stateValue}</p> {/* Display current state value */}
      <button onClick={() => dispatch({ type: "Increment" })}>Plus</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Minus</button>
    </>
  );
};

export default Test;
