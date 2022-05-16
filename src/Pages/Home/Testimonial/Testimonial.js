import React from "react";
import ButtomCarts from "./ButtomCarts";
import quotes from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div>
      <div className="flex justify-between mt-20">
        <div>
          <h3 className="text-xl text-secondary">Testimonial</h3>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div>
          {" "}
          <img className="w-24 lg:w-1/2" src={quotes} alt="" />
        </div>
      </div>

      <ButtomCarts></ButtomCarts>
    </div>
  );
};

export default Testimonial;
