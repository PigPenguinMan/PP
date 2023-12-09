import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./contexts/themecontext";
import { Suspense, lazy, useState } from "react";
import { LoginContext } from "./contexts/logincontext";
import LoadingPage from "./pages/loading";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
/**
 * 12/04 상태관리를 위한 reactq-query 추가
 * 데이터패치가 끝나고
 */


/**
 * 12/03 lazy , suspense 추가
 */
const MainLayout = lazy(() => import("./layouts/layout"));
const MainPage = lazy(() => import("./pages/mainpage"));
const DashBoardPage = lazy(() => import("./pages/dashboardpage"));
const SignInPage = lazy(() => import("./pages/account/signinpage"));
const SignUpPage = lazy(() => import("./pages/account/signuppage"));
const BlogPage = lazy(() => import("./pages/blogpage"));

const App = () => {
  const [isDkMd, setIsDkMd] = useState<Boolean>(false);
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  return (
    <ThemeContext.Provider value={{ isDkMd, setIsDkMd }}>
        <LoginContext.Provider value={{ isLogin, setIsLogin }}>

            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<DashBoardPage />} />
                <Route path="/account/signin" element={<SignInPage />} />
                <Route path="/account/signup" element={<SignUpPage />} />
                <Route path="/blog" element={<BlogPage />}></Route>
              </Route>
            </Routes>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        </LoginContext.Provider>
      </ThemeContext.Provider>
  );
};

export default App;
