import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "./Service.scss";

function Service({ image, title, desc, delay }) {
  return (
    <div className="service-item">
      <img src={image} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p className="p-text">{desc}</p>
      </div>
      <div className="start">
        <a href="#contact">
          Get In Touch <FiArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Service;
