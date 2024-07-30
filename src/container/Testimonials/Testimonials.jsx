import React from "react";
import { Container } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";

import { TestimonialsSwiper } from "../../components";
import "./Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials section" id="testimonials">
      <Container>
        <ImQuotesLeft className="icon" />
        <TestimonialsSwiper />
      </Container>
    </div>
  );
}

export default Testimonials;
