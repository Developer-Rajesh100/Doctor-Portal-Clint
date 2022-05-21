import React from "react";

const Cart = ({ img, cartTitle, cartParagraph }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cartTitle}</h2>
                    <p> {cartParagraph} </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
