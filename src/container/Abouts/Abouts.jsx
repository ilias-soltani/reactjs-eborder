import React from "react";
import { Container } from "react-bootstrap";
import { AiFillHeart, AiFillCheckCircle } from "react-icons/ai";
import { BiSupport, BiSolidTime } from "react-icons/bi";

import images from "../../constants/images";
import { About } from "../../components";
import "./Abouts.scss";

function Abouts() {
  const abouts = [
    {
      image: images.about1,
      title: "Seamless Expertise",
      icon: AiFillHeart,
      desc: "Our team's extensive experience ensures a seamless navigation through intricate administrative processes, leaving you free to focus on your goals.",
    },
    {
      image: images.about2,
      title: "Personalized Solutions",
      icon: BiSupport,
      desc: "With a commitment to understanding your specific needs, we tailor our services to match your requirements, delivering solutions that are uniquely yours.",
    },
    {
      image: images.about3,
      title: "Timely Results",
      icon: BiSolidTime,
      desc: "We recognize the importance of your time. Our efficient approach guarantees timely and accurate outcomes, minimizing any unnecessary delays.",
    },
    {
      image: images.about4,
      title: "Reliability Assured",
      icon: AiFillCheckCircle,
      desc: "Trust in our proven track record of delivering successful results. Our dedication to excellence ensures you can rely on us for your important undertakings.",
    },
  ];

  return (
    <div className="about" id="about">
      <Container>
        <div className="text-heading">
          <h1>
            Elevate Your Experience <br /> <span>With Us</span>
          </h1>
          <p>
            Expert Guidance, Benefit from our experienced team's insights for
            successful outcomes.
          </p>
        </div>

        <div className="about-items">
          {abouts.map((about, i) => (
            <About
              key={i}
              image={about.image}
              title={about.title}
              desc={about.desc}
            >
              <about.icon />
            </About>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Abouts;
