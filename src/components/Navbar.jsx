import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
