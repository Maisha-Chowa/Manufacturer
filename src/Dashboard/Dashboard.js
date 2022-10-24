import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log("admin", admin);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <h2>Dashboard</h2>
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myreview">MyReview</Link>
            </li>
            <li>
              <Link to="/dashboard/myprofile">MyProfile</Link>
            </li>
            {/* <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproduct">Manage Products</Link>
            </li> */}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageproduct">Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
