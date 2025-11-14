import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BookOutlined,
  HomeOutlined,
  PersonOutline,
  MailOutline,
  DashboardOutlined,
} from "@mui/icons-material";
import "../app.scss";

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
        // activeclassname={active === "home" ? "active" : ""}
        activeclassname={`${pathname === home && "active"}`}
        className="tooltip"
        data-tooltip="Home"
        end
      >
        <HomeOutlined />
      </NavLink>

      <NavLink
        to="/resume"
        activeclassname={`${pathname === resume && "active"}`}
        onClick={() => setActive("resume")}
        data-tooltip="Resume"
        className="tooltip"
        end
      >
        <BookOutlined />
      </NavLink>

      <NavLink
        to="/about"
        activeclassname={`${pathname === about && "active"}`}
        onClick={() => setActive("about")}
        className="tooltip"
        data-tooltip="About"
        end
      >
        <PersonOutline />
      </NavLink>

      <NavLink
        to="/portfolios"
        activeclassname={`${pathname === portfolios && "active"}`}
        onClick={() => setActive("portfolios")}
        data-tooltip="Portfolios"
        className="tooltip"
        end
      >
        <DashboardOutlined />
      </NavLink>

      {/* <NavLink
        to="/blogs"
        className={active === 0 ? "nav-item" : ""}
        onClick={() => setActive("blogs")}
        activeclassname="active-class"
        end
        
      >
        Blogs
      </NavLink> */}
      <NavLink
        to="/contact"
        activeclassname={`${pathname === contact && "active"}`}
        onClick={() => setActive("contact")}
        data-tooltip="Contact"
        className="tooltip"
        end
      >
        <MailOutline />
      </NavLink>
    </nav>
  );
};

export default DownNav;
