import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 lg:px-32 bg-gray-50">
      <div className="lg:mx-auto px-4 items-center gap-10  grid grid-cols-1 lg:grid-cols-2">
        <motion.img
          src="/AboutCarImage2.png"
          alt="About Us"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] rounded-lg shadow-lg "
        />
        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent">
              About Us
            </p>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            We Happy Cars situated at Kumbhashi, Udupi, Karnataka, are one of
            the most trusted second hand car dealer in the city. We are leading
            second hand car dealer where you can buy a used car of any brand.
            Our mission is to bring joy & delight into car buying & ownership.
            It’s as simple as that. We believe in the quality & dependability of
            our used cars. Keeping in mind the customer’s expectations and
            concerns our expert team gets a right car for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
