  
import React, { useState } from "react";
import "../Components/Loginsignup.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import img from "../Images/unsplash.jpg";
import Footer from "./Footer";
import * as Yup from "yup";
function Signup() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required*"),
    email: Yup.string()
      .email("Invalid email address*")
      .required("Email is required*"),
    password: Yup.string().required("Password is required* "),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match*")
      .required("Confirm Password is required*"),
  });

  function handleSignup(event) {
    
    event.preventDefault();
    schema
      .validate({ name, email, password, confirmPassword }, { abortEarly: false })
      .then(() => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Signup successful");
        history("/Login");
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  }

  return (
    <div>
      <form onSubmit={handleSignup}>
         
        <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
        <br />
        
        <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      </div>
        <br />
        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>
        
        <br />
        <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
      </div>
        
        <br />
        <button data-text="Awesome" type="submit" className="button">
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