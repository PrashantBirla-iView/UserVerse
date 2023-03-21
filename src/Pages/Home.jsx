import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../Pages/Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  const history = useNavigate();
  const compare = ()=> {const isLoggedIn = !!localStorage.getItem("email");
  if ( isLoggedIn ) {
    history("/Users")
  }
  else{
    history("/signup")
  }
}
  
  return (
    <>
    <Navbar/>
      <div className="homeemain">
        <div className="heading">
          {" "}
          <h1 className="heading-1">
            {" "}
            <span className="fontt">Hello!</span> welcome to UserVerse.
          </h1>
          <br />
          <button className="clickk" onClick={() => compare()} >
            Let's Go
          </button>
        </div>
        <div className="mid-text">
          {" "}
          <h4 className="first-line">
            Find random users and their details in an UserVerse.
          </h4>
          
          <h5 className="sec-line">
            User Universe Browse and Explore a Comprehensive Database of Random
            User Information from Around the World
          </h5>
        </div>
      </div>
           <div className="background">
        <div class="container-1">
          <article class="card">
            <a href="#" class="card__link">
              <div class="card__icon">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#999"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__media">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#F5F5F5"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__header">
                <p class="card__header-title">UserVerse</p>
                <p class="card__header-meta">Universe of User</p>
                <div class="card__header-icon">
                  {/* <svg viewBox="0 0 28 25">
                    <path
                      fill="#fff"
                      d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                    ></path>
                  </svg> */}
                </div>
              </div>
            </a>
          </article>


          <article class="card">
            <a href="#" class="card__link">
              <div class="card__icon">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#999"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__media">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#F5F5F5"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__header">
                <p class="card__header-title">UserVerse</p>
                <p class="card__header-meta">Universe of User</p>
                <div class="card__header-icon">
                  {/* <svg viewBox="0 0 28 25">
                    <path
                      fill="#fff"
                      d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                    ></path>
                  </svg> */}
                </div>
              </div>
            </a>
          </article>


          <article class="card">
            <a href="#" class="card__link">
              <div class="card__icon">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#999"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__media">
                <svg viewBox="0 0 1129 994">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="#F5F5F5"
                    stroke-width="41"
                  >
                    <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                    <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                    <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
                  </g>
                </svg>
              </div>

              <div class="card__header">
                <p class="card__header-title">UserVerse</p>
                <p class="card__header-meta">Universe of user</p>
                <div class="card__header-icon">
                  {/* <svg viewBox="0 0 28 25">
                    <path
                      fill="#fff"
                      d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                    ></path>
                  </svg> */}
                </div>
              </div>
            </a>
          </article>
        </div>
 
</div>
 
<Footer/>
       
    </>
  );
};

export default Home;
