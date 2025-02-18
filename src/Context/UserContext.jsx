import { createContext, useState } from "react";

const UserContext = createContext();  // Create context

const UserProviders = ({ children }) => {
  const [name, setName] = useState("");
  
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProviders, UserContext };  // Export both the provider and the context
