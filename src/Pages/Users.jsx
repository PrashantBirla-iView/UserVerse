import React from "react";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
 
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/users.css";
import ScrollToTop from "react-scroll-to-top";

const Users = () => {
  
  
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
        <Card/>
        <Footer/>
       
    </>
  );
};

export default Users;
