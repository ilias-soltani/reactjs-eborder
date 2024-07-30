import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

import { Service } from "../../components";
import images from "../../constants/images";
import "./Services.scss";

function Services() {
  const services = [
    {
      image: images.service1,
      title: "NIF",
      desc: "Get your tax identification number hassle-free, ensuring your legal compliance in your new destination.",
    },
    {
      image: images.service2,
      title: "NISS",
      desc: "Access essential social security benefits with ease, promoting your well-being in your adopted homeland.",
    },
    {
      image: images.service3,
      title: "Bank Account",
      desc: "Establishing financial stability is crucial. We assist you in setting up your bank account, enabling you to manage your finances efficiently.",
    },
    {
      image: images.service4,
      title: "SEF Application",
      desc: "Effortlessly apply for SEF residency. our services simplify the application procedure for your Portuguese residency permit.",
    },
    {
      image: images.service5,
      title: "SEF Manifestacao",
      desc: "Simplify your residence permit application through our expert guidance, making your transition legally sound and straight forward.",
    },
    {
      image: images.service6,
      title: "University Applications",
      desc: "Pursue education across borders. We aid in the application process to institutions that align with your aspirations.",
    },
    {
      image: images.service7,
      title: "Health insurance",
      desc: "Your well-being is paramount. We help you secure comprehensive health insurance coverage for peace of mind.",
    },
    {
      image: images.service8,
      title: "Visa Cancellation",
      desc: "Transitioning also involves closure. We assist in the cancellation of previous visas, ensuring a clean slate for your new ventures.",
    },
    {
      image: images.service9,
      title: "Contracts",
      desc: "Whether it's housing, employment, or services, we provide support in understanding and finalizing important contracts.",
    },
    {
      image: images.service10,
      title: "IEFP Assistance",
      desc: "For career transitions, we offer guidance through the Instituto do Emprego e Formação Profissional programs.",
    },
    {
      image: images.service11,
      title: "SAPO",
      desc: "Stay informed with the latest news from your home country and around the world through our SAPO news integration.",
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [50, 0] }}
      transition={{ duration: 0.5, ease: "easeInOut", delayChildren: 0.5 }}
      className="section services"
      id="services"
    >
      <Container>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="main-heading"
        >
          <h5>Services</h5>
          <h1>Elevating Your Ease, Every Step.</h1>
          <p className="p-text">
            Embark on a Journey of Tailored Services, Elevating Your Vision with
            Excellence.
          </p>
        </motion.div>

        <div className="services-items">
          {services.map((item, i) => (
            <Service
              key={`${item.title}-${i}`}
              image={item.image}
              title={item.title}
              desc={item.desc}
              delay={i * 0.3}
            />
          ))}
        </div>
      </Container>
    </motion.div>
  );
}

export default Services;
