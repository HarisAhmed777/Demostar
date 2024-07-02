import React, { createContext, useState } from 'react';

export const Context = createContext({
  isAuthorized: false,
  setIsAuthorized: () => {},
  user: {},
  setUser: () => {},
  theme:false,
  setTheme :()=>{},
});

export const ContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [theme,setTheme] = useState(false);

  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
        theme,
        setTheme
      }}
    >
      {children}
    </Context.Provider>
  );
};
