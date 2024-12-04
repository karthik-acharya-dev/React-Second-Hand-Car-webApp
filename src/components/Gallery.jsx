import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Animation triggers when 10% of the element is in view
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay increases for each image
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="gallery" className="py-16 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent">
            Gallery
          </p>
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              custom={index} // Custom prop for delay
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              className="overflow-hidden rounded-xl shadow "
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
