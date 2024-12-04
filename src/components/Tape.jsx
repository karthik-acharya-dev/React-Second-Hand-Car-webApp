import { Fragment } from "react";
const words = [
  "Fuel Efficient",
  "High Performance",
  "Safe",
  "Spacious",
  "Stylish",
  "Comfortable",
  "Durable",
  "Low Maintenance",
  "Advanced Technology",
  "Eco-Friendly",
];

export default function Tape() {
  return (
    <div className="py-16 lg:pu-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    {/* <StarIcon className="size-6 text-gray-900 -rotate-12" /> */}
                    <img src="star.svg" alt="" className="" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}