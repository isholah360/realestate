import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-com">
        <div className="foot-layout">
          <div className="first-col">
            <div className="homer-logo">HOMERS</div>
            <div className="premu">
              Premium service. Follow us for the latest news about real estate
            </div>
            <div className="footer-soc">
              <FaInstagram />
              <FaLinkedin />
              <FaFacebookF />
              <IoLogoYoutube />
            </div>
          </div>
          <div className="first-col">
            <div className="premu">Contact</div>
            <div className="phone-numbers">
              <div className="phone">
                <IoMdPhonePortrait />
              </div>
              <div className="number">+2348068235454</div>
            </div>
            <div className="phone-numbers">
              <div className="phone">
                <CiLocationOn />
              </div>
              <div className="number">Adekunle Fajuyi Barracks, Ojoo, Ibadan, Oyo State.</div>
            </div>
            <div className="phone-numbers">
              <div className="phone">
                <IoMailOpenOutline />
              </div>
              <div className="number">Isholah360@gmail.com</div>
            </div>
          </div>
          <div className="first-col  last">
            <div className="premu">Don’t Miss Last Insights</div>
            <div className="our-news">Subscribe now and thank us later</div>
            <form action="">
              <input type="text" placeholder="Isholah360@gmail.com" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="copywrite"> &#169; 2024 Copyright message goes here. All Rights Reserved.</div>
      </div>
    </>
  );
}
