import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="mx-20">
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;
