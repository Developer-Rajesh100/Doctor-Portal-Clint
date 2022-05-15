import React from "react";
import Cart from "./Cart";

const Carts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
      <Cart
        img="https://i.ibb.co/bzw0ZNz/fluoride.png"
        cartTitle="Fluoride Treatment"
        cartParagraph="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
      ></Cart>
      <Cart
        img="https://i.ibb.co/sP3dCfy/cavity.png"
        cartTitle="Cavity Filling"
        cartParagraph="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
      ></Cart>
      <Cart
        img="https://i.ibb.co/0cgrHMf/whitening.png"
        cartTitle="Teeth Whitening"
        cartParagraph="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
      ></Cart>
    </div>
  );
};

export default Carts;
