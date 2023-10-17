import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
