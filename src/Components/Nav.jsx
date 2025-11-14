import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BookOutlined,
  HomeOutlined,
  PersonOutline,
  MailOutline,
  DashboardOutlined,
} from "@mui/icons-material";
import "../app.scss"

const DownNav = () => {
  const home = "/";
  const about = "/about";
  const resume = "/resume";
  const portfolios = "/portfolios";
  const contact = "/contact";
  const blogs = "/blogs";
  const [active, setActive] = useState("home");
  const { pathname } = useLocation();

  console.log(active);
  console.log(pathname);

  return (
    <nav>
      <NavLink
        to="/"
        onClick={() => setActive("home")}
        // activeClassName={active === "home" ? "active" : ""}
        activeClassName={`${pathname === home && "active"}`}
        className="tooltip"
        data-tooltip="Home"
        exact
      >
        <HomeOutlined />
      </NavLink>
   
      <NavLink
        to="/resume"
        activeClassName={`${pathname === resume && "active"}`}
        onClick={() => setActive("resume")}
        data-tooltip="Resume"
        className="tooltip"
        exact
      >
        <BookOutlined />
      </NavLink>

      <NavLink
        to="/about"
        activeClassName={`${pathname === about && "active"}`}
        onClick={() => setActive("about")}
        className="tooltip"
        data-tooltip="About"
        exact
      >
        <PersonOutline />
      </NavLink>

      <NavLink
        to="/portfolios"
        activeClassName={`${pathname === portfolios && "active"}`}
        onClick={() => setActive("portfolios")}
        data-tooltip="Portfolios"
        className="tooltip"
        exact
      >
        <DashboardOutlined />
      </NavLink>

      {/* <NavLink
        to="/blogs"
        className={active === 0 ? "nav-item" : ""}
        onClick={() => setActive("blogs")}
        activeClassName="active-class"
        exact
        
      >
        Blogs
      </NavLink> */}
      <NavLink
        to="/contact"
        activeClassName={`${pathname === contact && "active"}`}
        onClick={() => setActive("contact")}
        data-tooltip="Contact"
        className="tooltip"
        exact
      >
        <MailOutline />
      </NavLink>
    </nav>
  );
};

export default DownNav;
