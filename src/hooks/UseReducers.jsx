import {  useReducer } from "react";


const UseReducer = () => {
  const initialState = 85;


  const reducer = (state, action) => {
    console.log(state, action, "Hero");
   
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };


  const [stateValue, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      {stateValue}
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </>
  );
};


export default UseReducer;