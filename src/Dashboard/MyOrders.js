import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyOrders = () => {
  const [allpurchaseinfo, setallpurchaseinfo] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        ` https://polar-journey-63728.herokuapp.com/purchaseinfo?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setallpurchaseinfo(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2>My Purchaseinfo: {allpurchaseinfo.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Mobile Now</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allpurchaseinfo.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.pName}</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
                <td>{a.quantity}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
