import React from "react";

const ContractUs = () => {
    return (
        <section className="bg-[url('https://i.ibb.co/nkGdz9g/appointment.png')] py-20">
            <div className="text-center">
                <h3 className="text-secondary text-lg font-semibold">
                    Contact Us
                </h3>
                <h2 className="text-4xl text-white font-light">
                    Stay connected with us
                </h2>
            </div>
            <form className="flex flex-col items-center mt-12">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input w-full max-w-xs"
                    required
                />
                <input
                    //   style={{ weight: "12%" }}
                    type="text"
                    placeholder="Subject"
                    className="input w-full max-w-xs my-5"
                    required
                />
                <textarea
                    className="textarea w-1/4"
                    placeholder="Your message"
                    required
                ></textarea>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-5 px-8"
                />
            </form>
        </section>
    );
};

export default ContractUs;
