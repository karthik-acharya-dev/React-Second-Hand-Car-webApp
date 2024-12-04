import React from "react";

const FeaturedCars = () => {
  const cars = [
    { id: 1, name: "Honda", price: "₹8,50,000", image: "/hond.png" },
    { id: 2, name: "Ford ECO", price: "₹7,50,000", image: "/ford2.png" },
    { id: 3, name: "Ford", price: "₹5,00,000", image: "/ford.png" },
    {
      id: 4,
      name: "Hyundai",
      price: "₹17,50,000",
      image: "/hyundia.png",
    },
    { id: 5, name: "Hyundai New", price: "₹5,00,000", image: "/hyundia2.png" },
    { id: 6, name: "BMW", price: "₹37,50,000", image: "/bmw1.png" },
    {
      id: 7,
      name: "Hyundai New",
      price: "₹5,00,000",
      image: "/pngimg.com - hyundai_PNG11207.png",
    },
    { id: 8, name: "Jeep", price: "₹25,00,000", image: "/jeep.png" },
  ];

  return (
    <section id="cars" className="py-16  bg-white mt-24">
      <div className="max-w-7xl lg:mx-auto px-5 lg:px-36">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          <p className=" font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-sky-600 text-center bg-clip-text text-transparent">
            Featured Cars
          </p>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-xl hover:-rotate-6 transition duration-300 "
            >
              <div
                id="featured-Car-height"
                className="md:h-[130px] sm:h-[120px] lg:h-[150px] h-[130px] lg:mb-0"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold  text-center">{car.name}</h3>
              <p className="text-lg text-blue-500 text-center">{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
