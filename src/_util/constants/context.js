'use client'
import {createContext, useContext, useState } from 'react';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(true);
    const [isMenu, setIsMenu] = useState(false);
    const [isAcctMenu, setIsAcctMenu] = useState(false);
    const [isModal, setIsModal] = useState(true);
    const [isDropDown, setIsDropDown] = useState(false);
  const [id, setId] = useState(2);
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
        isModal,
        setIsModal,
        id,
        setId,
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