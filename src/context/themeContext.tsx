import { useState, useEffect, FC, ReactNode, createContext, useContext } from "react";

interface ThemeContextType {
  currentTheme: string;
  changeCurrentTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  const changeCurrentTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [theme]);

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  return useContext(ThemeContext);
}
