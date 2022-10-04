import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BookOutlined,
  HomeOutlined,
  PersonOutline,
  MailOutline,
  DashboardOutlined,
} from "@material-ui/icons";
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
        data-tooltip="Tooltip Content"
        exact
      >
        <HomeOutlined />
      </NavLink>
      <NavLink
        to="/about"
        activeClassName={`${pathname === about && "active"}`}
        onClick={() => setActive("about")}
        exact
      >
        <PersonOutline />
      </NavLink>

      <NavLink
        to="/resume"
        activeClassName={`${pathname === resume && "active"}`}
        onClick={() => setActive("resume")}
        exact
      >
        <BookOutlined />
      </NavLink>

      <NavLink
        to="/portfolios"
        activeClassName={`${pathname === portfolios && "active"}`}
        onClick={() => setActive("portfolios")}
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
        exact
      >
        <MailOutline />
      </NavLink>
    </nav>
  );
};

export default DownNav;
