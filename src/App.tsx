import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/layout";
import MainPage from "./pages/mainpage";
import { ThemeContext } from "./contexts/themecontext";
import { useState } from "react";
import { LoginContext } from "./contexts/logincontext";
import SignInPage from "./pages/account/signinpage";
import SignUpPage from "./pages/account/signuppage";
import DashBoardPage from "./pages/dashboardpage";
import BlogPage from "./pages/blogpage";
function App() {
  const [isDkMd, setIsDkMd] = useState<Boolean>(false);
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  return (
    <ThemeContext.Provider value={{ isDkMd, setIsDkMd }}>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />}/>
            <Route path="/dashboard" element={<DashBoardPage/>} />
            <Route path="/account/signin" element={<SignInPage/>} />
            <Route path="/account/signup" element={<SignUpPage/>} />
            <Route path="/blog" element={<BlogPage/>}/>
          </Route>
        </Routes>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
