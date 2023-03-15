import React, { useEffect } from "react";
import "../Components/Navbar.css";
 
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          UserVerse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {isLoggedIn ? (
            <NavLink className="ancc" onClick={handleLogout} to="/">
              Logout
            </NavLink>
          ) : (
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/Login">
              <b>Login</b>
              </NavLink>
              <NavLink className="nav-link" to="/SignUp">
              <b>SignUp</b> 
              </NavLink>
            </div>
          )}
          {/* } */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
