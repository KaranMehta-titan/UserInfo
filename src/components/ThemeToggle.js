import { useContext } from "react";
import ThemeContext from "../appContext/themeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        document.body.classList.toggle("dark");
      }}
    >{`Turn on ${theme} theme`}</button>
  );
};

export default ThemeToggle;
