import React from "react";
import clock from "../../../assets/icons/clock.svg";

const Info1 = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary pl-5">
      <figure>
        <img src={clock} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Opening Hours</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default Info1;
