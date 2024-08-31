import React from "react";
import "./follow.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Follow() {
  return (
    <>
      <div className="folow-compl">
        <div className="folow-sites">
          <div className="folous">Follow Us</div>
          <div className="our-new">
            Don’t miss promotions, follow us for the latest news
          </div>
          <div className="follow-socails">
            <FaInstagram />
            <FaLinkedin />
            <FaFacebookF />
            <IoLogoYoutube />
          </div>
        </div>
        <hr className="divider" />
        <div className="emailpanle">
          <div className="folous">Don't Miss Our News</div>
          <div className="our-news">Subscribe now and thank us later</div>
          <form action="">
            <input type="text" placeholder="Isholah360@gmail.com"/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}
