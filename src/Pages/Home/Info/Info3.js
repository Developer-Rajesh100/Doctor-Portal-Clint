import React from "react";
import call from "../../../assets/icons/phone.svg";

const Info3 = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary pl-5 pt-5">
            <figure>
                <img src={call} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Contact us now</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default Info3;
