import React from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white px-12">
      <Info1></Info1>
      <Info2></Info2>
      <Info3></Info3>
    </div>
  );
};

export default Info;
