import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";

import "./FAQs.scss";

function FAQs() {
  const faqs = [
    {
      question: "Which payment methods do you accept?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque ut rerum iure molestiae et quia, architecto eos sit porro sapiente voluptatibus, voluptatum fuga maiores numquam ex eveniet vero earum!",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "architecto eos sit porro sapiente voluptatibus, voluptatum fuga maiores numquam ex eveniet vero earum!",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque ut rerum iure molestiae et quia, architecto eos sit porro sapiente voluptatibus, voluptatum fuga maiores numquam ex eveniet vero earum!",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque ut rerum iure molestiae et quia, architecto eos sit porro sapiente voluptatibus, voluptatum fuga maiores numquam ex eveniet vero earum!",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque ut rerum iure molestiae et quia, architecto eos sit porro sapiente voluptatibus, voluptatum fuga maiores numquam ex eveniet vero earum!",
    },
  ];

  let refs = useRef(faqs.map(React.createRef));

  const [active, setActive] = useState(-1);

  const toggle = (i) => {
    i === active ? setActive(-1) : setActive(i);
  };

  return (
    <div className="faqs section" id="faqs">
      <Container>
        <h1 className="heading">Wait, what about...</h1>
        <div className="faqs-items">
          {faqs.map((item, i) => (
            <div className="item" onClick={() => toggle(i)} key={i}>
              <div className={`title ${active === i ? "active" : ""}`}>
                <h2>{item.question}</h2>
                <div className="icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
              <div
                ref={refs.current[i]}
                className="content"
                style={
                  active === i
                    ? { maxHeight: refs.current[i].current?.scrollHeight }
                    : { maxHeight: 0 }
                }
              >
                <div className="content-answer">{item.answer}</div>
              </div>
            </div>
          ))}
          {console.log(refs)}
        </div>
      </Container>
    </div>
  );
}

export default FAQs;
