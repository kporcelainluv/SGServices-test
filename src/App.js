import React from "react";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";

export const App = () => {
  return (
    <div>
      <Header />
      {/*<Example />*/}
      <Hero />
      <Portfolio />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};
