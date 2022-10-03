import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children, startingTheme = "light" }) => {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
