import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/layout";
import Page1 from "./pages/page1";
import { ThemeContext } from "./contexts/themecontext";
import { useState } from "react";

function App() {
  const [isDkMd, setIsDkMd] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDkMd, setIsDkMd }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Page1 />}></Route>
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
