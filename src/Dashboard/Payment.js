import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3hDdKGemxaXFrEagb9DSoX78SBJt4gV48JPfl1BzR0bYORjCxwFKczfofR79t0UrnwS7heiDzXqdI36b1uYX0M007gBcKlJt"
);
const Payment = () => {
  const { id } = useParams();
  console.log(id);
  const [purchaseinfo, setpurchaseinfo] = useState({});
  //const url = ` https://polar-journey-63728.herokuapp.com/purchaseinfo/${id}`;

  useEffect(() => {
    fetch(` https://polar-journey-63728.herokuapp.com/purchaseinfo/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setpurchaseinfo(data);
      });
  }, [purchaseinfo]);

  const { _id, pName, user, email, price, quantity } = purchaseinfo;
  console.log(purchaseinfo);
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {user}</p>
          <h2 class="card-title">Please Pay for {pName}</h2>
          <p>
            Product Quantity:{" "}
            <span className="text-orange-700">{quantity}</span>
          </p>
          <p>Please pay: ${price * parseInt(quantity)}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchaseinfo={purchaseinfo} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
