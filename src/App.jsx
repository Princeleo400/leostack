import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Switch from "@mui/material/Switch";
import NotFound from "./Pages/NotFound";
import DownNav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navigation";
import { MoonIcon, SunIcon } from "./assets/svg/icons";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };
  return (
    <div className="App">
      {/* <Sidebar navToggle={"nav-toggle"} /> */}
      {/* <Navbar /> */}
      <ThemeBtn
        onClick={themeToggler}
        aria-label={`Switch to ${theme === "dark-theme" ? "light-theme" : "dark-theme"} mode`}
      >
        {theme === "dark-theme" ? <MoonIcon /> : <SunIcon />}
      </ThemeBtn>
      {/* <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div> */}
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} exact />
          <Route path="/portfolios" element={<PortfoliosPage />} exact />
          <Route path="/blogs" element={<BlogsPage />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContentStyled>

      <DownNav />
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  // margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

const ThemeBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: var(--bg-card);
  border: 0.5px solid var(--border-strong);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(12px);

  &:hover {
    color: var(--blue);
    border-color: var(--blue-border);
    background: var(--blue-dim);
  }
`;
export default App;
