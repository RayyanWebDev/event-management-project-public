import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("movie.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto mb-14 mt-14">
        <div className="grid justify-center">
          <div className="flex gap-24">
            <div className="texr-s text-2xl font-semibold ">Our Services</div>
            <p className="w-52 border-t border-gray-300 my-4"></p>
          </div>
          <div>
            {" "}
            <span className="text-7xl font-bold text-white ">WHAT</span>{" "}
            <span className="text-7xl font-bold">WE DO</span>
          </div>
          <div>
            In world where we are constantly bombarded with contents, <br />
            Movie has the power to cut through the noise and make us pause
          </div>
        </div>

        <div className="grid grid-cols-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      {}
    </div>
  );
};

export default Services;
