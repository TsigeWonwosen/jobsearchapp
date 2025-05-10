import { createContext } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: () => setDarkMode(!darkMode) }}
    >
      <div className={`${theme} min-h-screen`}>{children}</div>
    </ThemeContext.Provider>
  );
};
