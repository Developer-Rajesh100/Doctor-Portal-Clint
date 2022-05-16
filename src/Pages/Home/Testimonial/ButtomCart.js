import React from "react";

const ButtomCart = ({ img, description, name, city }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl my-12 py-8">
        <div class="card-body">
          <p className="text-justify">{description}</p>
        </div>
        <div className="flex mx-12 items-center">
          <div class="avatar flex-1">
            <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{name}</h3>
            <p>
              <small>{city}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtomCart;
