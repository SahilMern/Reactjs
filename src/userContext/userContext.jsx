import { createContext, useState } from "react";

// Create a context with a default value of an empty object or null.
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
