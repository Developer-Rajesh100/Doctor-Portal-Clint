import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        // to close the modal
        setTreatment(null);
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center my-6"
                    >
                        <h3 class="font-bold text-lg mb-5">
                            Booking For: {name}
                        </h3>
                        <input
                            type="text"
                            disabled
                            value={format(date, "PP")}
                            class="input w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            class="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot) => (
                                <option value={slot}>{slot}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            class="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            class="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            placeholder="Your Phone Number"
                            class="input w-full max-w-xs"
                            required
                        />
                        <input
                            type="submit"
                            value={"Submit"}
                            class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
                        />
                    </form>
                    <label
                        for="booking-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
