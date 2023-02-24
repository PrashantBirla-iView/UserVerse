import React, { useState, useEffect } from "react";
import "../Components/Card.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=12")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    
  }, []);

  return (
    <div className="main">
      {data.map((item) => (
        <>
        {console.log(item)}
          {" "}
          <div
            className="submain"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {" "}
            <a className="main-link">
              <img className="img" src={item.avatar} />
              <h5> {item.employment.title}</h5> <br></br>
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
              <div class="modal-content">
                <div class="modal-body">
                  <div className="modall">
                  <h6> FirstName:</h6>{item.first_name}
                  <h6>LastName:</h6>  {item.last_name}
                    <br />
                    <h6>Email:</h6>   {item.email}
                    <br />
                    <h6>Gender:</h6>   {item.gender}
                    <br />
                    <h6>Phone Number:</h6>  {item.phone_number}
                    <br />
                    <h6>Credit_detail:</h6>  {item.credit_card.cc_number}
                    <br />
                    {item.subscription.payment_method}
                    <br />
                    {item.subscription.plan}
                    <br />
                    {item.subscription.status}
                    <br />
                    {item.subscription.term}
                    <br />
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
