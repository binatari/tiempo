/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const MainContext = ({ children }) => {
  const storedIsDark = localStorage.getItem("isDark") !== "true";
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    localStorage.setItem("isDark", isDark.toString());
  }, [isDark]);



  const contextInfo = {
    isDark,
    setIsDark,
  };

  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export default MainContext;
