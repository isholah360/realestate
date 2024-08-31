import React from "react";
import { FaStar } from "react-icons/fa";
import "./testimony.css";

export default function Testimony() {
  return (
    <>
      <div className="testy-title">Client Testimonials</div>
    <div className="com-testimomy">
      <Testimonial
        name="Tunrayo Hyshorlar"
        content="I recently sold a house with Alexa and while this can be a very stressful process, I felt so confident by partnering with Alexa. He was very professional, easy to communicate with, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly."
      />
      <Testimonial
        name="Tunrayo Hyshorlar"
        content="I recently sold a house with Alexa and while this can be a very stressful process, I felt so confident by partnering with Alexa. He was very professional, easy to communicate with, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly."
      />
      <Testimonial
        name="Tunrayo Hyshorlar"
        content="I recently sold a house with Alexa and while this can be a very stressful process, I felt so confident by partnering with Alexa. He was very professional, easy to communicate with, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly."
      />
    </div>
    </>
  );
}

export function Testimonial({ name, content }) {
  return (
    <div>
      <div className="testy-card">
        <div className="star-stack">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="mreview">{content}</div>
        <div className="mname">{name}</div>
      </div>
    </div>
  );
}
