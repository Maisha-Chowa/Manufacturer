import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const Purchase = () => {
  const [tool, setTool] = useState({});
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  let { id } = useParams();
  useEffect(() => {
    fetch(` https://polar-journey-63728.herokuapp.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

  const { _id, img, name, des, price, minOrderQuantity, availQuantity } = tool;

  // }
  const handlePurchaseInfo = (event) => {
    event.preventDefault();

    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const quantity = event.target.quantity.value;

    // console.log(phone, address, quantity);
    if (quantity < minOrderQuantity) {
      alert("Minimum Order Quantity   :   " + minOrderQuantity);
    }
    if (quantity > availQuantity) {
      alert("Available Products Quantity  :   " + availQuantity);
    }

    const PurchaseInfo = {
      productId: _id,
      pName: name,
      user: user.displayName,
      email: user.email,
      phone: phone,
      address: address,
      quantity: quantity,
      price: price,
    };

    console.log(PurchaseInfo);
    if (quantity >= minOrderQuantity && quantity <= availQuantity) {
      fetch(" https://polar-journey-63728.herokuapp.com/purchaseinfo", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(PurchaseInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <section className="grid grid-cols-1 mx-28 my-14">
      <div className="border-solid border-2 border-l-4 border-grey-500  rounded-lg  hover:border-rose-600 shadow-2xl pb-8 ">
        <div className=" flex justify-center pt-4">
          <img
            className="border-solid border-2 border-rose-500 "
            width="250px"
            height="250px"
            src={img}
            alt=""
          />
        </div>
        <h2 className="mx-4 px-4 ">
          <span className="font-bold">Product Id: </span>
          {_id}
        </h2>
        <h2 className="mx-4 px-4 ">
          <span className="font-bold">Product name: </span>
          {name}
        </h2>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Details:</span> {des}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">Price: </span>
          {price}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">minOrderQuantity: </span>
          {minOrderQuantity}
        </p>
        <p className="mx-4 px-4 ">
          <span className="font-bold">AvailQuantity </span>
          {availQuantity}
        </p>
        <div className=" flex justify-center pt-4">
          <label
            htmlFor="booking-modal"
            className="modal-button px-4 py-2  rounded-lg text-white bg-indigo-900 
             hover:bg-rose-700"
          >
            Purchase Now
          </label>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle btn-primary text-white absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-lg text-primary">
                Name : {tool.name}
              </h3>
              <form
                onSubmit={handlePurchaseInfo}
                className="grid grid-cols-1 gap-2 justify-items-center mt-2"
              >
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName || ""}
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  required
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="Enter quantity"
                  required
                  // value={tool?.minOrderQuantity || ""}
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="modal-action">
                  <input
                    className="btn btn-primary  text-white input input-bordered w-full max-w-xs "
                    type="submit"
                    placeholder="Submit"
                    value="Submit"
                    id="booking-modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
