import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div class="hero min-h-screen bg-[url('https://i.ibb.co/jMkZ1FD/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/4KLyq3M/chair.png"
                    class="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
