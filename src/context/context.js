import React, { createContext, useContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

export const UseGlobalProvider = ({ children }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ registryOpo, setRegistryOpo ] = useState(() => {
    const stored = localStorage.getItem('registryOpo');
    return stored ? JSON.parse(stored) : [];
  });

  const [ saveCamLocal, setSaveCamLocal ] = useState(() => {
    const stored = localStorage.getItem('camLocal');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('registryOpo', JSON.stringify(registryOpo));
  }, [registryOpo]);

  useEffect(() => {
    localStorage.setItem('camLocal', JSON.stringify(saveCamLocal));
  }, [saveCamLocal]);

  return <GlobalContext.Provider
    value={{
      openModal,
      setOpenModal,
      setRegistryOpo,
      registryOpo,
      setSaveCamLocal,
      saveCamLocal
    }}
  >
    { children }
  </GlobalContext.Provider>
}