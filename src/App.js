import React from "react";
import { NavBar, Footer } from "./components";
import {
  Landing,
  Services,
  Abouts,
  Testimonials,
  Contact,
  FAQs,
} from "./container";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <Services />
      <Abouts />
      <Testimonials />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
