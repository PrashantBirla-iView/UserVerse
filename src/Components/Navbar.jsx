import React from "react";
import '../Components/Navbar.css';
const Navbar = (props) => {
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
          <div class="navbar-nav">
            
           
            
            <a class="nav-link" href="login">
              Login
            </a>
            <a class="nav-link" href="Signup">
              Signup
            </a>
            {/* <a class="nav-link disabled">Disabled</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
