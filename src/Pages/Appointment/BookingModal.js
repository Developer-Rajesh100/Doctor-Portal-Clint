import React from "react";
import { format } from "date-fns";
import auth from "../../Firebase.Init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const formattedDate = format(date, "PP");

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatment: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                //to close the modal
                console.log(data);
                if (data.success) {
                    toast.success(
                        `Appointment is set, ${formattedDate} at ${slot}`,
                        {
                            theme: "colored",
                        }
                    );
                } else {
                    toast.error(
                        `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`,
                        {
                            theme: "colored",
                        }
                    );
                }
                refetch();
                setTreatment(null);
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center my-6"
                    >
                        <h3 className="font-bold text-lg mb-5">
                            Booking For: {name}
                        </h3>
                        <input
                            type="text"
                            disabled
                            value={format(date, "PP")}
                            className="input w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot) => (
                                <option value={slot}>{slot}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="name"
                            disabled
                            value={user?.displayName}
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            // placeholder="Your Email"
                            disabled
                            value={user?.email}
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="number"
                            name="phone"
                            value={+91}
                            placeholder="Your Phone Number"
                            className="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="submit"
                            value={"Submit"}
                            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
                        />
                    </form>
                    <label
                        for="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
