import { createContext, useState } from "react";

type ThemeProviderProps = {
  children: JSX.Element;
};

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
