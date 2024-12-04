import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Tape from "./components/Tape";
import Brand from "./components/Brand";
import FooterButtonSection from "./components/FooterButtonSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tape />
      <Brand />
      <FeaturedCars />
      <AboutUs />
      <Gallery />
      <Reviews />
      <ContactUs />
      <Footer />
      <FooterButtonSection />
    </div>
  );
};

export default App;
