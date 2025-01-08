
const ChildComponentA = ({ value, onValueChange }) => {
  return (
    <div>
      <p>Value in A: {value}</p>
      <button onClick={() => onValueChange(value + 1)}>Increment in A</button>
    </div>
  );
};


export default ChildComponentA;