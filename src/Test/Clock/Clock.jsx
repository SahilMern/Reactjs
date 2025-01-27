import { useState } from "react";

const Clock = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedColor}>
        <option value="">Default</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
      <p>Selected color: {selectedColor}</p>
    </div>
  );
};

export default Clock;
