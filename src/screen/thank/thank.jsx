import React from "react";
import { useSelector } from "react-redux";
import "./thank.css";

export default function Thank() {
  const payInfo = useSelector((state) => state.pay.payInfo);

  return (
    <>
      <div className="main-thank">
        <div className="thanks">
          Dear <span style={{fontWeight:"550", fontStyle:"italic"}}>{payInfo.name.toUpperCase()}</span>, thank you for paying {payInfo.amt}{" "}
          for the property, we appriciate you for your patronage and our customer representative
          will be in touch with you soon.
        </div>
      </div>
    </>
  );
}
