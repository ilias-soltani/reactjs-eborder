import React, { useEffect, useState } from "react";

import { AiFillHeart } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import "./ContactPopUp.scss";

function ContactPopUp({ setShow, service, email }) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 100);
  }, []);

  const remove = () => {
    setAnimation(false);
    setTimeout(() => setShow(false), 500);
  };

  return (
    <div
      className={`contact-pop-up ${animation ? "show" : ""}`}
      onClick={remove}
    >
      <div className="box" onClick={(e) => e.stopPropagation()}>
        <FaXmark onClick={remove} className="remove" />
        <AiFillHeart className="icon" />
        <h1>Thank You</h1>
        <p className="p-text">
          Thank you for choosing eBorder! We're thrilled to assist you with{" "}
          <span>{service}.</span> Rest assured, we'll send an email to{" "}
          <span>({email})</span> shortly with all the details you need to get
          started. Your journey with us begins now, and we're here to make it
          seamless.
        </p>
        <button className="btn-main-no-a" onClick={remove}>
          Done
        </button>
      </div>
    </div>
  );
}

export default ContactPopUp;
