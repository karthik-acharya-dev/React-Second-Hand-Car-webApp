import React, { Fragment } from "react";

const Reviews = () => {
  const reviews = [
    { name: "Abhishek", stars: 5, comment: "Amazing service and great cars!" },
    {
      name: "Sathish Holla",
      stars: 5,
      comment: `ಉತ್ತಮ ಕಾರುಗಳು:
ಮಾರುತಿ ಸುಜುಕಿ ಸ್ವಿಫ್ಟ್
ಹುಂಡಾಯಿ ,
ಹೋಂಡಾ ಸಿಟಿ`,
    },
    {
      name: "Pavan",
      stars: 4,
      comment: "Very professional and reliable.",
    },
    { name: "Guru Poojary", stars: 5, comment: "Highly recommended!" },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-50 lg:px-32 ">
      <div className="max-w-7xl mx-auto px-4  overflow-x-hidden overflow-y-hidden">
        <h2 className="text-4xl font-bold text-gray-800  text-center">
          <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent">
            What Our Customers Say
          </p>
        </h2>
        <div className="mt-8 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex  pr-8 gap-2 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[...new Array(3)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {reviews.map((r, j) => (
                  <div
                    key={j}
                    className=" bg-white border rounded-lg p-6 shadow-md hover:shadow-lg hover:-rotate-3 transition duration-300 my-4 w-[300px]"
                  >
                    <h3 className="text-xl font-bold">{r.name}</h3>
                    <p className="text-yellow-500">{"⭐".repeat(r.stars)}</p>
                    <p className="text-gray-600 mt-2">{r.comment}</p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
