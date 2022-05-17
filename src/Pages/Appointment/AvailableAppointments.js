import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <h2 className="text-center text-xl font-semibold text-secondary mt-8">
                Available Appointments on {format(date, "PP")}
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default AvailableAppointments;