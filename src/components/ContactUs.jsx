import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact-us"
      className="py-16 bg-white grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-44 justify-center gap-8"
    >
      <div className="h-[320px] p-0 relative ">
        <a
          href="https://maps.app.goo.gl/y4CUzzKP8kZnr4HWA"
          target="_blank"
          rel="noopener"
        >
          <img
            src="map.png"
            alt="map"
            className="h-full w-full object-cover object-left-top rounded-xl p-[1px]  hover:scale-105 duration-700 shadow-xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
          </div>
        </a>
      </div>
      <div className="max-w-7xl lg:px-4 mt-16 lg:mt-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent">
            Contact Us
          </p>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border rounded-lg p-4 shadow-md w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border rounded-lg p-4 shadow-md w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="border rounded-lg p-4 shadow-md w-full md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 w-full md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
