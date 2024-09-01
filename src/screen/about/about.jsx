import React from "react";
import "./about.css";
import { About } from "../../component";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

export default function Abouts() {
  return (
    <div>
      <>
        <div className="about-com">
          <div className="about-head">
            <img src="asset/d36.jfif" alt="" />
            <div className="abou-cover">About Us</div>
            <div className="imported-content">
              <About />
              <div className="ceo-quote">
              <img src="asset/d34.jfif" alt="" />
              <div className="quote-cover">
                <div className="myceo">CEO QUOTE</div>
                <div className="thequote">
                  "The only way to do great work is to love what you do."
                </div>
                <div className="myceo">DYLAN DAWSON</div>
              </div>
            </div>
            <div className="formed">
              <div className="filled-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="firstInput"
                  />
                  <input type="text" placeholder="Lastname" />
                  <br />
                  <input type="text" placeholder="Email" className="email" />
                  <input type="text" placeholder="Phone" className="email" />
                  <br />
                  <textarea
                    name="Mesage"
                    id=""
                    // cols={91}
                    rows={20}
                    placeholder="Message"
                    className="messagearea"
                  ></textarea>
                  <Link to="/thank">
                    <button>Send Message</button>
                  </Link>
                  
                </form>
              </div>
            </div>
            </div>
            <Footer/>
          </div>
        </div>
      </>
    </div>
  );
}
