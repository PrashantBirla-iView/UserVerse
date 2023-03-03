import React, { useState, useEffect } from "react";
import "../Components/Card.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=25")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main">
      {data.map((item) => (
        <>
          {console.log(item)}{" "}
          <div
            className="submain m-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          > 
           
            <a className="main-link">
              <img className="img" src={item.avatar} />
              <div className="font">
                {item.first_name} &nbsp;
                {item.last_name}{" "}
              </div>
              <br></br>
            </a> 
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content" style={{ width: "50rem" }}>
                <div class="modal-body">
                  <div className="modall">
                    {/* style={{margin:"-10rem 0rem 0rem 0rem"}} */}
                    <img className="modal-image" src={item.avatar} />
                    <br />
                    <div className="user-details-modal">
                      <h4 className="title-font"> 
                      {item.employment.title}</h4>
                      <br></br>
                      <h6>Name:</h6>
                      {item.first_name} &nbsp;{item.last_name}
                      <h6>Email: </h6>
                      {item.email}
                      <h6>Gender:</h6> {item.gender}
                      <h6>Phone Number:</h6> {item.phone_number}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <Footer />
    </div>
  );
}

export default Card;
