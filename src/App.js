import { useState } from "react";
import "./App.css";
import ThemeContext from "./appContext/themeContext";
import UserTable from "./components/Usertable";
import UserInfoContext from "./appContext/userInfoContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("dark");
  const [userInfo, setUserInfo] = useState(null);
  // ...
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
        <UserTable />
      </UserInfoContext.Provider>
      <ThemeToggle />
    </ThemeContext.Provider>
  );
}

export default App;
