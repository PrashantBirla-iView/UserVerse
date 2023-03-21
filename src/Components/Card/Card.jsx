import React, { useState, useEffect } from "react";
import "./Card.css";
import ClipLoader from "react-spinners/ClipLoader";
import { TbPoint } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

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
  const [UserD, setUserD] = useState({
    avatar: null,
    street_name: null,
    date_of_birth: null,
    title: null,
    gender: null,
    email: null,
    first_name: null,
    employment: null,
    employment: {title:null},
    subscription: null,
    address: null,
    address:{country:null},
    address:{state:null},
    address:{street_address:null},
    address:{street_name:null},
    employment:{key_skill:null},
    subscription:{plan:null}
  });
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users?size=52")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  
  const userdata = (item) => {
    setUserD(item);
  };
  return (
    <>
      <div className="container container-2">
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
                  <a className="main-link" onClick={() => userdata(item)}>
                    <div className="image-b">
                      <img className="img" src={item.avatar} alt="No-image" />
                    </div>
                    <br />
                    <div className="font">
                      {item.first_name} &nbsp;
                      {item.last_name}{" "}
                    </div>
                    <div className="emp-t">{item.employment.title}</div>
                    <br></br>
                  </a>
                </div>
              </>
            ))}

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
                      <img className="modal-image" src={UserD.avatar} />
                      <br />
                      <div className="user-details-modal">
                        <h4 className="title-font">
                          {UserD.employment.title}
                        </h4>
                        <br /> <TbPoint />
                        &nbsp;<b>Name: </b> {UserD.first_name}&nbsp;
                        {UserD.last_name}
                        <br /> <TbPoint />
                        &nbsp;<b>Email: </b> {UserD.email}
                        <br /> <TbPoint />
                        &nbsp;<b>Gender: </b> {UserD.gender}
                        <br /> <TbPoint />
                        &nbsp;<b>Date of birth: </b> {UserD.date_of_birth}
                        <br /> <TbPoint />
                        &nbsp;<b>Phone Number: </b> {UserD.phone_number}
                        <br /> <TbPoint />
                        &nbsp;<b>Address: </b> {UserD.address.street_name},{" "}
                        {UserD.address.street_address}, {UserD.address.state},{" "}
                        {UserD.address.country}
                        <br /> <TbPoint />
                        &nbsp;<b>Subscription plan: </b>{" "}
                        {UserD.subscription.plan}
                        <br /> <TbPoint />
                        &nbsp;<b>key skill: </b> {UserD.employment.key_skill}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
