import React, { useState } from "react";
import Child from "./Child";
export const ThemeContext = React.createContext();
function Parent() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h2>Parent Component {theme} </h2>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
}

export default Parent;
