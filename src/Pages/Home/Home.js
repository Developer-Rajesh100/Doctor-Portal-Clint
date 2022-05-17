import React from "react";
import Banner from "./Banner/Banner";
import ContractUs from "./ContractUs/ContractUs";
import Doctor from "./Doctor/Doctor";
import Info from "./Info/Info";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="mx-20">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Doctor></Doctor>
            <Testimonial></Testimonial>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;
