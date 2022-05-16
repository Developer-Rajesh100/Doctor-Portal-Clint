import React from "react";
import ButtomCart from "./ButtomCart";

const ButtomCarts = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <ButtomCart
        description="  It is a long established fact that by the readable content of a lot
      layout. The point of using Lorem a more-or-less normal distribu to
      using Content here, content"
        img="https://i.ibb.co/QYyQRYv/people1.png"
        name="Winson Herry"
        city="California"
      ></ButtomCart>
      <ButtomCart
        description="  It is a long established fact that by the readable content of a lot
      layout. The point of using Lorem a more-or-less normal distribu to
      using Content here, content"
        img="https://i.ibb.co/kMGZZkm/people2.png"
        name="Winson Herry"
        city="California"
      ></ButtomCart>
      <ButtomCart
        description="  It is a long established fact that by the readable content of a lot
      layout. The point of using Lorem a more-or-less normal distribu to
      using Content here, content"
        img="https://i.ibb.co/HCCWcTZ/people3.png"
        name="Winson Herry"
        city="California"
      ></ButtomCart>
    </div>
  );
};

export default ButtomCarts;
