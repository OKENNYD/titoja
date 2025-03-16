'use client'
import {createContext, useContext, useState } from 'react';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {
const [user,setUser] = useState(null);
const [isLogged, setIsLogged] = useState(true);
const [isMenu, setIsMenu] = useState(false);
const [isAcctMenu, setIsAcctMenu] = useState(false);
const [isDropDown, setIsDropDown] = useState(false);
const [isPopup, setIsPopup] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        isDropDown,
        setIsDropDown,
        isMenu,
        setIsMenu,
        isAcctMenu,
        setIsAcctMenu,
        isPopup,
        setIsPopup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;