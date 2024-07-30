import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./NavBar.scss";
import { Squash as Hamburger } from "hamburger-react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 1) setScrolled(true);
    else setScrolled(false);
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div
      className={`header ${scrolled ? "on-scroll" : ""} ${open ? "open" : ""}`}
    >
      <Container>
        <a href="#home" className="logo">
          eBorder
        </a>
        <ul className="main-list">
          {["Services", "About", "Testimonials", "Contact", "FAQs"].map(
            (item) => (
              <li key={item}>
                <a href={`#${item.split(" ")[0].toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        <div className="toggle">
          <Hamburger
            color={`${scrolled || open ? "#fff" : "#000"}`}
            toggle={setOpen}
            toggled={open}
          />
        </div>

        <div className={`nav-bar-menu ${open ? "open" : ""}`}>
          <ul className="menu">
            {["Services", "About", "Testimonials", "Contact", "FAQs"].map(
              (item) => (
                <li key={item} onClick={() => setOpen(false)}>
                  <a href={`#${item.split(" ")[0].toLowerCase()}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
