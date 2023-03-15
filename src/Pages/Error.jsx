import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const history = useNavigate();

  function Back() {
    return history("/");
  }

  return (
    <>
      <div className="error-main">
        <h1 className="err"> Error 404🙁 </h1>
        <button onClick={() => Back()} class="btn">
          GO BACK!
        </button>
      </div>
    </>
  );
};

export default Error;
