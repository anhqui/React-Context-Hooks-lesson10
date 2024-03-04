import { useState, createContext } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ThemeToggle";

export const ThemeContext = createContext();
export const AuthContext = createContext();

function App() {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
