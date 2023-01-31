import React from "react";
import { useContext } from "react";
import { themeContext } from "..";
import style from "./Page.module.css";

const Page = () => {
  const [theme, setTheme] = useContext(themeContext);
  return (
    <div className={theme === "light" ? style.mainThemeButton : style.mainDarkThemeButton}>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle Change Mode
      </button>
    </div>
  );
};

export default Page;
