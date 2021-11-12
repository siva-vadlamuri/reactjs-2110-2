import React, { useContext } from "react";
import { ThemeContext } from "./Parent";

function GrandChild() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Grand child-{theme} </h2>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark Theme
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light Theme
      </button>
    </div>
  );
}

export default GrandChild;
