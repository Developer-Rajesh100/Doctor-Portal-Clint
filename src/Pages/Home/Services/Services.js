import React from "react";
import Carts from "./Cart/Carts";
import Dental from "./Dental/Dental";

const Services = () => {
  return (
    <div>
      <h2 className="mt-20 text-center text-xl font-bold text-secondary">
        OUR SERVICES
      </h2>
      <h1 className="text-center text-accent text-4xl mt-2 mb-5">
        Services We Provide
      </h1>
      <Carts></Carts>
      <Dental></Dental>
    </div>
  );
};

export default Services;
