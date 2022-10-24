import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  //   const {
  //     data: users,
  //     isLoading,
  //     refetch,
  //   } = useQuery("users", () =>
  //     fetch(" https://polar-journey-63728.herokuapp.com/user", {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }).then((res) => res.json())
  //   );
  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }

  useEffect(() => {
    fetch(` https://polar-journey-63728.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users]);
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
