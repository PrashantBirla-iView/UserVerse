import React, { useState } from "react";
import "../Components/Loginsignup.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import img from "../Images/unsplash.jpg";
import Footer from "./Footer";
function Signup() {
  const history = useNavigate();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setusername] = useState("");

  function handleSignup() {
    if (Email === "") {
      alert("Enter an Email");
    } else if (password === "") {
      alert("enter a password");
    } else if (password.length <= 4) {
      alert("enter minimum 5 character");
    } else if (!Email.includes("@")) {
      alert("please enter valid email address");
    } else if (!Email.includes(".com")) {
      alert("please enter valid email address");
    } else if (password === password2) {
      localStorage.setItem("Email", Email);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("password2", password2);

      alert("Signup successful!");
      history("/Login");
    } else {
      alert("both password must be same");
    }
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            placeholder="Create Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          UserName:
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
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
        <label>
          Re-Enter Password:
          <input
            type="password"
            placeholder="Re-enter Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>
        <br />
        <button data-text="Awesome" onClick={handleSignup} className="button">
          <span className="actual-text">&nbsp;SignUp&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;SignUp&nbsp;
          </span>
        </button>
      </form>
      <a>
        Already have an account?&nbsp;
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
        <h1>Signup</h1>
        <Signup />
      </div>
      <Footer />
    </>
  );
}

export default App;
