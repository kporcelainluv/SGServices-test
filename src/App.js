import React from "react";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};
