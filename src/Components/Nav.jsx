/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../app.scss";
import {
  AboutIcon,
  GridIcon,
  HomeIcon,
  MailIcon,
  ResumeIcon,
} from "../assets/svg/icons";

const DownNav = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: HomeIcon,
    },
    {
      path: "/about",
      label: "About",
      icon: AboutIcon,
    },
    {
      path: "/resume",
      label: "Resume",
      icon: ResumeIcon,
    },
    {
      path: "/portfolios",
      label: "Portfolios",
      icon: GridIcon,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: MailIcon,
    },
  ];

  return (
    <nav>
      <div className="nav-inner">
        {navItems.map(({ label, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setActive(label.toLowerCase())}
            data-tooltip={label}
            aria-label={label}
            className={({ isActive }) =>
              `tooltip nav-link ${isActive ? "active" : ""}`
            }
            end={path === "/"}
          >
            {icon}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DownNav;
