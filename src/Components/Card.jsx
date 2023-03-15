import React, { useState, useEffect } from "react";
import "../Components/Card.css";
import ClipLoader from "react-spinners/ClipLoader";
import { TbPoint } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import placeholderImage from '../Images/user.png';
const override = {
  display: "flex",
  margin: "0 auto",
  position: "absolute",
  height: "100px",
  width: "100px",
  top: "50%",
  left: "50%",
 
};

function Card() {
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=52")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="main col-sm-15">
            <ClipLoader
              loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {data.map((item) => (
              <>
                <div
                  className="submain m-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <a className="main-link">

  <img className="img" src={item.avatar} alt="No-image" />   
                   
                   
                    <br />
                    <div className="font">
                      {item.first_name} &nbsp;
                      {item.last_name}{" "}
                    </div>
                    <div className="emp-t">{item.employment.title}</div>
                    <br></br>
                  </a>
                </div>

                {/* modal started */}

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div
                      className="modal-content"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                      style={{ width: "50rem" }}
                    >
                      <div className="modal-body">
                        <div className="modall">
                          <RxCross1 className="cross" data-bs-dismiss="modal" />
                          <img className="modal-image" src={item.avatar} />
                          <br />
                          <div className="user-details-modal">
                            <h4 className="title-font">
                              {item.employment.title}
                            </h4>
                            <br /> <TbPoint />
                            &nbsp;<b>Name: </b> {item.first_name}&nbsp;{item.last_name}
                            <br /> <TbPoint />
                            &nbsp;<b>Email: </b> {item.email}
                            <br /> <TbPoint />
                            &nbsp;<b>Gender: </b> {item.gender}
                            <br /> <TbPoint />
                            &nbsp;<b>Date of birth: </b> {item.date_of_birth}
                            <br /> <TbPoint />
                            &nbsp;<b>Phone Number: </b> {item.phone_number}
                            <br /> <TbPoint />
                            &nbsp;<b>Address: </b> {item.address.street_name}, {item.address.street_address}, {item.address.state}, {item.address.country}
                            <br /> <TbPoint />
                            &nbsp;<b>Subscription plan: </b> {item.subscription.plan}
                            <br /> <TbPoint />
                            &nbsp;<b>key skill: </b> {item.employment.key_skill}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
