import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

import images from "../../constants/images";
import "./Landing.scss";

function Landing() {
  const [hideImage, setHideImage] = useState(0);

  setTimeout(() => setHideImage(hideImage === 2 ? 0 : hideImage + 1), 10000);

  return (
    <div className="landing">
      <Container>
        <div className="text">
          <h1>
            Make Your
            <br /> Dream Come
            <br /> True!
          </h1>
          <h4>
            Your Gateway to Effortless Progress:
            <br /> We Can Help You With{" "}
            <span>
              <Typewriter
                words={[
                  "NIF Number",
                  "NISS Number",
                  "New Bank Account",
                  "University Applications",
                  "Visa Cancellation",
                ]}
                loop={false}
                cursor
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h4>
          <button className="btn-main">
            <a href="#services">Our Services</a>
          </button>
        </div>
        <div className="image">
          {[images.landing1, images.landing2, images.landing3].map(
            (image, i) => (
              <img
                key={i}
                src={image}
                alt={`landing-${i + 1}`}
                className={`${hideImage === i ? "" : "hide"}`}
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
}

export default Landing;
