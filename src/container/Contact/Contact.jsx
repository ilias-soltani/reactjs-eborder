import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

import { contactSchemas } from "../../schemas";
import { ContactPopUp } from "../../components";
import images from "../../constants/images";
import "./Contact.scss";

function Contact() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setEmail] = useState("");
  const [dropdownActive, setDropdownActive] = useState("NIF");

  const onContactClick = (values, actions) => {
    actions.resetForm();
    setEmail(values.email);
    setShowPopUp(true);
    const templateParams = { ...values, service: dropdownActive };
    emailjs
      .send(
        "service_py9upj9",
        "template_zdy9vgf",
        templateParams,
        "cy06WfGMDywy7myOQ"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchemas,
    onSubmit: onContactClick,
  });

  return (
    <div className="contact" id="contact">
      <div className="form">
        <Container>
          <h1>Making a change start with one conversation</h1>
          <p className="description">
            Fill out the form below or send us an email at support@bordr.com. We
            are available on all weekdays and never let any email go unanswered.
          </p>
          <div className="fields">
            <div className="item">
              <label htmlFor="#service-dropdown">Service</label>
              <div className="dropdown" id="service-dropdown">
                <div
                  className="current"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{dropdownActive}</span>
                  <BiSolidDownArrow
                    className={`icon ${dropdownOpen ? "open" : ""}`}
                  />
                </div>
                <ul className={`${dropdownOpen ? "open" : ""}`}>
                  {[
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
                  ].map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setDropdownActive(item);
                        setDropdownOpen(!dropdownOpen);
                      }}
                      className={`${dropdownActive === item ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="item">
              <input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="name"
                placeholder="Entre Your Name"
                className={`main-input ${
                  errors.name && touched.name ? "input-error" : ""
                }`}
              />
              {errors.name && touched.name && (
                <p className="p-error">{errors.name}</p>
              )}
            </div>
            <div className="item">
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                id="email"
                placeholder="Entre Your Email"
                className={`main-input ${
                  errors.email && touched.email ? "input-error" : ""
                }`}
              />
              {errors.email && touched.email && (
                <p className="p-error">{errors.email}</p>
              )}
            </div>
            <div className="item">
              <textarea
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message (Optional)"
                id="message"
                className={`main-input ${
                  errors.message && touched.message ? "input-error" : ""
                }`}
              />
            </div>
          </div>
          <button
            className="btn-main-no-a"
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ marginTop: 16 }}
          >
            Contact Us
          </button>
        </Container>
      </div>
      <div className="image">
        <img src={images.imageTop} alt="" />
      </div>
      {showPopUp && (
        <ContactPopUp
          setShow={setShowPopUp}
          service={dropdownActive}
          email={email}
        />
      )}
    </div>
  );
}

export default Contact;
