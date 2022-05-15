import React from "react";

const Doctor = () => {
  return (
    <section className="flex items-center mt-60 rounded-lg bg-[url('https://i.ibb.co/nkGdz9g/appointment.png')]">
      <div>
        <img
          style={{ marginTop: "-200px" }}
          className="flex-1 hidden lg:block"
          src="https://i.ibb.co/xFdXS2V/doctor.png"
          alt=""
        />
      </div>
      <div className="flex-1 m-20">
        <h3 className="text-secondary text-xl font-bold mb-4">Appointment</h3>
        <h1 className="text-3xl font-semibold mb-4 text-white">
          Make an appointment Today
        </h1>
        <p className="text-justify text-white  mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>

    /*   <div class="hero min-h-screen bg-[url('https://i.ibb.co/nkGdz9g/appointment.png')]">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/xFdXS2V/doctor.png"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 class="text-5xl font-bold">Make an appointment Today</h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
    */
  );
};

export default Doctor;
