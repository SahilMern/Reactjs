import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    fullName: "",
  });

  const [file, setFile] = useState("");

  const handleChanges = (e) => {
    console.log(e.target.value, "e.target.value");
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(user); // To check the form data after submission
    console.log(file); // To check the selected file
  };

  const handleFile = (e) => {
    console.log(e.target.value);
    setFile(e.target.value);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleForm}>
        {/* Name Field */}
        <div className="form-container">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name" // Unique id for name field
            placeholder="Enter your name"
            className="form-input"
            value={user.name}
            onChange={handleChanges}
            name="name" // Name attribute matching the state key
          />
        </div>

        {/* Full Name Field */}
        <div className="form-container">
          <label htmlFor="fullname" className="form-label">
            {" "}
            {/* Updated htmlFor */}
            Full-Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your full name"
            className="form-input"
            value={user.fullName}
            onChange={handleChanges}
            name="fullName" // Matching name attribute
          />
        </div>

        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFile}
          value={file}
        />
            
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
