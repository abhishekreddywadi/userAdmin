import React, { createContext, useState } from "react";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [rfIdActive, setRfIdActive] = useState(false);
  const [masterFormActive, setMasterFormActive] = useState(false)
  const [businessFormActive, setBusinessFormActive] = useState(false)

  return (
    <UserContext.Provider value={{ rfIdActive, setRfIdActive, masterFormActive, setMasterFormActive, businessFormActive, setBusinessFormActive }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
