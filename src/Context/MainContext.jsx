/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const MainContext = ({ children }) => {
  //const storedIsDark = localStorage.getItem("isDark") !== "true";
  const [isDark, setIsDark] = useState(true);
  const [invoiceMod, setInvoiceMod] = useState(false);

  useEffect(() => {
    localStorage.setItem("isDark", isDark.toString());
  }, [isDark]);



  const contextInfo = {
    isDark,
    setIsDark,
    invoiceMod,
    setInvoiceMod
  };

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default MainContext;
