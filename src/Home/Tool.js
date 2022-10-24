import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, des, minOrderQuantity, availQuantity, price } = tool;
  const navigate = useNavigate();
  const navigatePurchase = () => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-start">
        <h2 className="card-title text-start">Product: {name}</h2>

        <p>Description: {des}</p>
        <p>minOrderQuantity: {minOrderQuantity}</p>
        <p>availQuantity: {availQuantity}</p>
        <p>Price: {price}</p>
        <button className="btn btn-primary" onClick={navigatePurchase}>
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Tool;
