import React from "react";

const Cart = ({ img, cartTitle, cartParagraph }) => {
  return (
    <div>
      <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{cartTitle}</h2>
          <p> {cartParagraph} </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
