import { useContext } from "react";
import { UserContext } from "./userContext/userContext";

const App = () => {
  const {user, setUser} = useContext(UserContext);
  // console.log(user, setUser, "userData");

  const handleClick = () => {
    setUser("sahil")
  };
  return (
    <div>
     <p>{user} user</p> 
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
