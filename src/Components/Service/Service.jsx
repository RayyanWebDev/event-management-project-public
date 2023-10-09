import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div>
      <div className=" ">
        <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {name} </h2>
            <p className="text-lg font-semibold">Price: ${price} </p>
            <p> {description} </p>
            <div className="card-actions">
              <Link to={`/service/${id}`}>
                <button className="btn but bg-red-400 ">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
