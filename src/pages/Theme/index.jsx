import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Page from "./Page";
import style from "./Theme.module.css";

const themeContext = createContext();
const Theme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log("theme : ", theme);
  }, [theme]);

  return (
    <div className="container">
      <div
        className={theme === "light" ? style.mainThemePage : style.darkTheme}
      >
        <h1>Welcome In Theme Change Page</h1>
        <div
          className={theme === "light" ? style.btnGroup : style.darkBtnGroup}
        >
          <button>login</button>
          <button>Sign Up</button>
        </div>
        <themeContext.Provider value={[theme, setTheme]}>
          <Page />
        </themeContext.Provider>
      </div>
    </div>
  );
};

export default Theme;
export { themeContext };
