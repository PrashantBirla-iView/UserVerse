import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import { Navigate } from "react-router-dom";

function App() {
 const [isLoggedIn, setisLoggedIn] = useState(false)
 
  useEffect(() => {
    
const  email = !!localStorage.getItem("email")
// console.log(email)
      if (email) {
      setisLoggedIn(true);
     } 
     else{
      setisLoggedIn(false)
     }
  }, [])
  
  return (  
<> <ToastContainer/> 
        <BrowserRouter> 
        
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
             <Route path="Home" element={<Home />} />
             <Route path="Users" element={<Users />} />
             <Route path='*' element={<Navigate to='/Signup' />} />
          </Routes>
           
        </BrowserRouter> 
    </>
  );
}

export default App;
