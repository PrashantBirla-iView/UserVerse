import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Loginsignup.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { ToastContainer, Toast, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  function handleLogin(event) {
    event.preventDefault();
    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        
        if (email === storedEmail && password === storedPassword) {
          history("/Users");
          toast.success("login successfull");
        } else {
          setErrors({
            email: "Invalid email or password",
            password: "Invalid email or password",
          });
        }
      })

      .catch((err) => {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  }
  // const toastMsg = () => {
  //   toast.success("login successfull");
  // };
  return (
    <>
   
      <form onSubmit={handleLogin}>
        <div>
          <label className="label1" htmlFor="email">
            Email:
          </label>
          <input
            placeholder="Enter Email"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <br />
        <div>
          <label className="label1" htmlFor="password">
            Password:
          </label>
          <input
            placeholder="Enter Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <br />

        <button>
    Login
</button>
        {/* <button
          // onClick={toastMsg}
          data-text="Awesome"
          type="submit"
          className="button"
        >
          <span className="actual-text">&nbsp;Login&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Login&nbsp;
          </span>
        </button> */}
      </form>
      <a>
        Don't have an account?&nbsp;
        <span>
          <NavLink to="/SignUp" className="temp">SignUp</NavLink>
        </span>
      </a>
      <ToastContainer />
      
    </>
  );
}

function App() {
  return (
    <>
       <Navbar/>
      <div className="head1">
        <h1>Login</h1>
        <LoginPage />
      </div>
       <Footer/>
    </>
  );
}

export default App;
