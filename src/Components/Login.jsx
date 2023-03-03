import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Loginsignup.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
function LoginPage() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (username === storedUsername && password === storedPassword ) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn",true);
      history("/Main");
      
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>You are logged in. </div>
        ) : (
          <form>
            <label>
              Username:
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button
              data-text="Awesome"
              onClick={handleLogin}
              className="button"
            >
              <span className="actual-text">&nbsp;Login&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Login&nbsp;
              </span>
            </button>
            
          </form>
        )}
      </div><a>
              Don't have an account?&nbsp;
              <span>
                <NavLink to="/SignUp">SignUp</NavLink>
              </span>
            </a>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="head1">
        <h1>Login</h1>
        <LoginPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
