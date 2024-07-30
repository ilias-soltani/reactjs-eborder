import React from "react";

import "./About.scss";

function About({ image, title, desc, children }) {
  return (
    <div className="about-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <div className="icon">{children}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default About;
