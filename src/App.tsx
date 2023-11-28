import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/layout";
import MainPage from "./pages/mainpage";
import { ThemeContext } from "./contexts/themecontext";
import { useState } from "react";
import { LoginContext } from "./contexts/logincontext";
function App() {
  const [isDkMd, setIsDkMd] = useState<Boolean>(false);
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  return (
    <ThemeContext.Provider value={{ isDkMd, setIsDkMd }}>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />}></Route>
          </Route>
        </Routes>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
