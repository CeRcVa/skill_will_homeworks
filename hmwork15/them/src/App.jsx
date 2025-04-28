import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWindowSize } from "./hooks/useWindowSize";
import "./App.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { width } = useWindowSize();

  const isMobile = width <= 768;

  useEffect(() => {
    if (isMobile) {
      document.body.className = "light";
    } else {
      document.body.className = theme;
    }
  }, [theme, isMobile]);

  const toggleTheme = () => {
    if (!isMobile) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const modeText = theme === "dark" ? "Dark Mode" : "Light Mode";
  const textColor = theme === "dark" ? "white" : "black";

  return (
    <div className="app">
      <h1 style={{ color: textColor }}>{modeText}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
