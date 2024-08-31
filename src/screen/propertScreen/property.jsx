import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { homes } from "../../component/find/findata";
import CursorProvider from "../../component/providers/cursorProvider";
import "./property.css";
import { FaCar } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiBathtub } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

export default function Property() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const { id } = useParams();
  console.log(id);

  const changeBg = () => {
    ref.current.style.background = " #B19777";
  };
  const changeDf = () => {
    ref.current.style.background = " #000";
  };
  return (
    <>
      <CursorProvider>
        <div>
          {homes.map((data) => (
            <div key={data.id}>
              {data.id !== id ? (
                <div></div>
              ) : (
                <div>
                  <div className="about-property">
                    <img src={`/${data.def}`} alt="" />
                    <div className="property-cover">
                      <div className="descri">{data.des}</div>
                      <div className="propdetail">
                        <div className="bed">
                          <IoLocationOutline /> 1241 Autuor Manor Road
                        </div>
                        <hr className="prop-line" />
                        <div className="bed">
                          <MdOutlineBed /> {data.val}
                        </div>
                        <hr className="prop-line" />
                        <div className="car">
                          <FaCar /> {data.carn}
                        </div>
                        <hr className="prop-line" />
                        <div className="ruler">
                          <TfiRulerAlt2 /> {data.size}
                        </div>
                        <hr className="prop-line" />
                        <div className="ruler">
                          <PiBathtub /> {data.shawn}
                        </div>
                        <hr className="prop-line" />
                        <div className="amount">{data.amt}</div>
                        <Link to="/payment">
                          <button
                            onMouseEnter={changeBg}
                            onMouseLeave={changeDf}
                            ref={ref}
                          >
                            Pay Rent
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="interiors">
                    <div className="the-art">THE ART OF LIVING</div>
                    <div className="the-interior">Interior Design</div>
                    <div className="the-imgs">
                      {data.imgs.map((list) => (
                        <div key={list} className="img-div">
                          <img src={`/${list}`} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="get-in-touch">
                    <div className="the-art">WE ARE HERE TO HELP</div>
                    <div className="the-interior">Get in Touch</div>
                    <div className="help-form">
                      Insterested in this property? Do not hesitate and book a
                      viewing. We have a large selection of options available.
                    </div>
                    <div className="email-phone-add">
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
                        <div className="number">
                          Adekunle Fajuyi Barracks, Ojoo.
                        </div>
                      </div>
                      <div className="phone-numbers">
                        <div className="phone">
                          <IoMailOpenOutline />
                        </div>
                        <div className="number">Isholah360@gmail.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="filled-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder="Firstname"
                        className="firstInput"
                      />
                      <input type="text" placeholder="Lastname" />
                      <br />
                      <input
                        type="text"
                        placeholder="Email"
                        className="email"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        className="email"
                      />
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
                      <Link to="/payment">
                        <button>Pay Rent</button>
                      </Link>
                    </form>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CursorProvider>
    </>
  );
}
