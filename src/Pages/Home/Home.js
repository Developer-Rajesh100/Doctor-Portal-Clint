import React from "react";
import Banner from "./Banner/Banner";
import Doctor from "./Doctor/Doctor";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-20">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Doctor></Doctor>
    </div>
  );
};

export default Home;
