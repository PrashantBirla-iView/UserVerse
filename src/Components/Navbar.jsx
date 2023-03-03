import React, { useEffect } from "react";
import "../Components/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false)
  useEffect(() => {
    setloggedIn(localStorage.getItem("isLoggedIn"))
  }, [ ])
       
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          UserVerse
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          {loggedIn ?  <a className="anc" href="/" onClick={() => localStorage.clear()}>Logout</a>  : 
          <div class="navbar-nav">
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <a class="nav-link" href="/Login">
              Login
            </a>
            <a class="nav-link" href="/SignUp">
              SignUp
            </a>
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
