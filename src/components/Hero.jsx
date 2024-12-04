import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaBullseye } from "react-icons/fa";

const Hero = () => {
  const text = "Happy Cars";
  const controls = useAnimation();
  const [showEnquire, setShowEnquire] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        for (let i = 0; i < text.length; i++) {
          await controls.start((i) => ({
            opacity: 1,
            transition: { delay: i * 0.1 },
          }));
        }
        await controls.start((i) => ({
          opacity: 0,
          transition: { delay: (text.length - i) * 0.1 },
        }));
      }
    };
    sequence();
  }, [controls, text.length]);

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({ opacity: 1 }),
  };

  useEffect(() => {
    if (showEnquire) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showEnquire]);

  function handleEnquireClick() {
    setShowEnquire(true);
  }

  function handleEnquireClose() {
    setShowEnquire(false);
  }

  return (
    <section
      id="home"
      className="h-screen lg:pt-24 pt-14 flex flex-col items-center justify-center bg-gray-100 relative"
    >
      <img
        src="/MainCar.png"
        alt="Car"
        className="lg:w-[50%] md:w-[60%] w-[80%]"
      />
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-gray-800">
          Find Your Dream Car with{" "}
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="text-blue-500"
              custom={i}
              initial="hidden"
              animate={controls}
              variants={textAnimation}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Quality Second-Hand Cars at the Best Prices!
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            View Cars
          </button>
          <button
            onClick={handleEnquireClick}
            className="ml-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900"
          >
            Enquire Now
          </button>
        </div>
      </div>
      {showEnquire && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-96 h-[450px] rounded-lg p-4">
            <h1 className="text-black font-semibold text-sm">I got Settled</h1>
            <button
              className="bg-red-800 text-white rounded-md py-3 px-5"
              onClick={handleEnquireClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
