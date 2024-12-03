const Child = ({ onValueChange, value }) => {
  return (
    <div>
      <p>Current Value is value {value}</p>
      <button onClick={() => onValueChange()}>Click</button>
    </div>
  );
};

export default Child;
