import React, { useState } from "react";
import "../Components/Loginsignup.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import img from "../Images/unsplash.jpg";
import Footer from "./Footer";
function Signup() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    if (username === "") {
      alert("Enter username");
    } else if (password === "") {
      alert("enter a password");
    } else if (password.length <= 4) {
      alert("enter minimum 5 character");
    } else if (!username.includes("@")) {
      alert("please enter valid email address");
    } else if (!username.includes(".com")) {
      alert("please enter valid email address");
    } else {
      alert("Signup successful!");
      history("/Login");
    }
  }

  return (
    <div>
      <form>
        <label>
          Username: 
          <input
            type="text"
            placeholder="Create Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:  
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
         <button data-text="Awesome"  onClick={handleSignup} className="button">
    <span className="actual-text">&nbsp;SignUp&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;SignUp&nbsp;</span>
</button>
        {/* <button type="button" onClick={handleSignup}>
          Signup
        </button> */}
      </form>
      <a>
        {" "}
        already have an account??{" "}
        <span>
          <NavLink to="/Login">Sign in</NavLink>
        </span>
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="head">
        <image src={img} />
        <h1>Signup Page</h1>
        <Signup />
      </div>
      <Footer/>
    </>
  );
}

export default App;
