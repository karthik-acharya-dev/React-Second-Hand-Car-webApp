import React from "react";

export default function Brand() {
  const brands = [
    { image: "/Brand_BMW.png", brandName: "BMW" },
    { image: "/Brand_FORD.png", brandName: "FORD" },
    { image: "/Brand_KIA.png", brandName: "KIA" },
    { image: "/Brand_JEEP.png", brandName: "JEEP" },
    { image: "/Brand_HYUNDAI.png", brandName: "HYUNDAI" },
    { image: "/Brand_HONDA.png", brandName: "HONDA" },
  ];
  return (
    <div className="lg:px-24 px-5 pt-10">
      <h2 className="text-green-400 text-center text-lg uppercase font-extrabold  ">
        Find your car by car brand
      </h2>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent py-2">
          Browse by Brands
        </p>
      </h2>
      <div className=" gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((item) => (
          <div className="bg-gray-100 hover:scale-110 duration-600 hover:bg-gray-200 hover:border-2 hover:border-blue-500 p-5 shadow-md flex flex-col justify-center items-center">
            <div className="w-32 h-32 flex items-center justify-center">
              <img src={item.image} alt="img" />
            </div>
            <h1 className="text-center font-bold text-gray-800">
              {item.brandName}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
