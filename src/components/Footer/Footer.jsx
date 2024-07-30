import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiSolidDownArrow, BiCopyright } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

import "./Footer.scss";

function Footer() {
  const list = [
    {
      title: "Services",
      items: [
        "NIF",
        "NISS",
        "Bank Account",
        "SEF Application",
        "SEF Manifestacao",
        "University Applications",
        "Health insurance",
        "Visa Cancellation",
        "Contracts",
        "IEFP Assistance",
        "SAPO",
      ],
    },
    {
      title: "Eborder",
      items: ["About Us", "Instagram", "Facebook", "Linkedin", "Twitter"],
    },
    {
      title: "Support",
      items: ["FAQs", "Contact Us"],
    },
  ];

  let refs = useRef(list.map(React.createRef));

  const [active, setActive] = useState(-1);

  const toggle = (i) => {
    i === active ? setActive(-1) : setActive(i);
  };

  return (
    <div className="footer">
      <Container>
        <div className="footer-list">
          <div className="footer-logo item">
            <a href="#home" className="logo">
              eBorder
            </a>
            <div className="footer-social">
              <a className="icon instagram" href="#">
                <AiFillInstagram />
              </a>
              <a className="icon facebook" href="#">
                <BiLogoFacebook />
              </a>
              <a className="icon linkedin" href="#">
                <BsLinkedin />
              </a>
              <a className="icon twitter" href="#">
                <RiTwitterXFill />
              </a>
            </div>
          </div>

          {list.map((item, i) => (
            <div className="list item" key={item.title + i}>
              <div
                className={`title ${active === i ? "active" : ""}`}
                onClick={() => toggle(i)}
                key={i}
              >
                <h4>{item.title}</h4>
                <div className="icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
              <div
                className="content"
                ref={refs.current[i]}
                style={
                  active === i
                    ? { maxHeight: refs.current[i].current.scrollHeight }
                    : { maxHeight: 0 }
                }
              >
                <ul>
                  {item.items.map((listItem, j) => (
                    <li key={j}>
                      <a href="#">{listItem}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-footer">
          <a href="#home" className="logo">
            eBorder
          </a>
          <div className="copyright">
            <a href="#" className="text-copyright">
              <BiCopyright /> 2023 eBorder, All right reserved
            </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
