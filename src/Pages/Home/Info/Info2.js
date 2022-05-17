import React from "react";
import location from "../../../assets/icons/marker.svg";

const Info2 = () => {
  return (
    <div class="card lg:card-side bg-accent shadow-xl pl-5 pt-5">
      <figure>
        <img src={location} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Visit our location</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default Info2;
