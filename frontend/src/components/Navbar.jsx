import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/articles">projects</NavLink>|<NavLink to="/">our mission</NavLink>|
        <NavLink to="/">sponsor</NavLink>
        <div className="nav-icons">
          {/* <NavLink to="/">
            <i className="icons">
              <i aria-hidden="true" className="chevron left icon"></i>
            </i>
          </NavLink> */}
          <NavLink to="/login">
            <img src="/images/profile icon.png" alt="user-icon" />
          </NavLink>
        </div>
      </div>
      <p></p>
    </nav>
  );
};

export default Navbar;
