import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./ContactUs.css";
import img from "../../Images/Cu.webp";
export const ContactUs = () => {
  return (
    <>
      <Navbar />
      
      <div className="main-contact">
        <div className="container"><br /> <br /> <br />
          <div className="sej-un-sect container-sm">
            <div className="row">
              <article class="row gty-30">
                <div className="col-sm-6 contact-text">
                  <img className="image-contact" src={img} alt="" />
                </div>
                <div className="col-sm-6">
                  <h1 className="bold">
                    Have questions? <br />
                    Shoot us an email.
                  </h1>
                  <br />
                  <div className="text-1">
                    <p>
                      We are an industry-leading publication that provides the
                      latest news and insights about SEO, search, and how it
                      impacts your business -and career.
                    </p>
                    <br />
                    <p>
                      Have a question for us or feedback? Please click on the
                      most appropriate category and fill out the form to reach
                      us.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <br />
          <div className="row">
            <article class="row gty-30">
              <div className="col-sm-6 contact-text-2">
                <div className="sej-un-sect  ">
                  <h2>
                    <b>How can we help?</b>
                  </h2>
                  <br />
                  <ol className="sej-iss-list issue-list_js">
                    <li className="text-list"> I want to advertise on SEJ </li>
                    <br />
                    <li className="text-list">
                      I’m a reporter or work in the media
                    </li>
                    <br />
                    <li className="text-list">
                      I’m a current or former contributor
                    </li>
                    <br />
                    <li className="text-list">I want to write for SEJ </li>
                    <br />
                    <li className="text-list">I have a hot news tip </li> <br />
                    <li className="text-list">I want to report a correction</li>
                    <br />
                    <li className="text-list">
                      I want to report a bug or technical issue
                    </li>
                    <br />
                    <li className="text-list">I need something else </li> <br />
                  </ol>
                </div>
              </div>
              <div className="col-sm-6">
                <form className="form-contact" action="">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>
                      I’m a reporter or work in the media
                    </option>
                    <option value="2">I want to write for SEJ</option>
                    <option value="1">I have a hot news tip</option>
                    <option value="3">I want to report a correction </option>
                    <option value="4">
                      I want to report a bug or technical issue
                    </option>
                    <option value="5">I need something else</option>
                  </select>
                  <br />
                  <label> Your Name </label>
                  <input className="input-contact" type="text" /> <br />
                  <label> Your Email </label>
                  <input className="input-contact" type="email" /> <br />
                  <label> Your message </label>
                  <textarea name=" " rows="4" cols="62" />
                  <br />
                  <label> Screenshot(optional) </label>
                  <input className="input-contact" type="file" /> <br />
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      I am not a Robot
                    </label>
                  </div><br />
                  {/* <input className="checkbox" type="checkbox"/>  <label>I am not a Robot </label> */}
                  <button type="button" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </article>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
};
