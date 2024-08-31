import React, { useEffect, useRef, useState } from "react";
import CursorProvider from "../../component/providers/cursorProvider";
import withCursor from "../../component/HOCs/withCursor";
import { Link, useParams, useNavigate } from "react-router-dom";
import { homes } from "../../component/find/findata";
import "./pay.css";
import { FaCar } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { PiBathtub } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { setPayInfo} from "../../component/redux/paySlice";
import { useDispatch, useSelector } from "react-redux";

function Pay(props) {
  const ref = useRef(null);
  const [formData, setFormData] = useState();
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState("");
  const { onCursor } = props.context;
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeBg = () => {
    ref.current.style.background = " #B19777";
    ref.current.style.color = " #fff";
  };
  const changeDf = () => {
    ref.current.style.background = " #000";
    ref.current.style.color = " #B19777";
  };
  useEffect(() => {
    {
      homes.map((data) => <>{data.id !== id ? "" : setAmount(data.amt)}</>);
    }
  }, [id]);
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      formData.cardNumber === "424242424242" &&
      formData.ExpiryDate === "20/30" &&
      formData.cardName
    ) {
      dispatch(
        setPayInfo(
         { card:formData.cardNumber, expire:formData.ExpiryDate, name:formData.cardName, amt: amount.slice(0, 7) }
        )
      );
     
      navigate("/thank");
    }
    setError(true);
  };

  return (
    <>
      <div style={{ padding: "5rem 5%", width: "100%" }}>
        <>
          <>
            <div className="pay-page">
              <div className="product-img">
                {homes.map((data) => (
                  <div key={data.id} className="pay-layout">
                    {data.id !== id ? (
                      <div></div>
                    ) : (
                      <>
                        <div className="pay-layout">
                          <div>
                            <div className="prop-img">
                              <img src={`/${data.def}`} alt="" />
                            </div>
                            <div className="prop-detail">{data.des}</div>
                            <div className="prop-facility">
                              <div className="bedd">
                                <IoLocationOutline /> 1241 Autuor Manor Road
                              </div>

                              <div className="bedd">
                                <MdOutlineBed /> {data.val}
                              </div>

                              <div className="bedd">
                                <FaCar /> {data.carn}
                              </div>

                              <div className="bedd">
                                <TfiRulerAlt2 /> {data.size}
                              </div>

                              <div className="bedd">
                                <PiBathtub /> {data.shawn}
                              </div>
                              <div className="bedd">Price: {data.amt}</div>
                            </div>
                          </div>
                          <div className="card-form">
                            <div className="cardetai">Card Details</div>
                            <form action="" onSubmit={handleSubmit}>
                              <input
                                type="text"
                                placeholder="Isholah Duro"
                                name="cardName"
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                placeholder="424242424242"
                                name="cardNumber"
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                placeholder="20/30"
                                name="ExpiryDate"
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                placeholder="123"
                                name="cvv"
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                placeholder="Adekunke Fajuyi Barracks, Ibadan"
                              />
                              <button className="amount-pay">
                                {data.amt.slice(0, 7)}
                              </button>
                              <button
                                onMouseEnter={changeBg}
                                onMouseLeave={changeDf}
                                ref={ref}
                              >
                                Payment
                              </button>
                              {error && (
                                <div style={{ color: "red" }}>
                                  Input the correct card info
                                </div>
                              )}
                            </form>
                          </div>
                        </div>
                      </>
                    )}{" "}
                  </div>
                ))}
              </div>
            </div>
          </>
        </>
      </div>
    </>
  );
}
export default withCursor(Pay);
