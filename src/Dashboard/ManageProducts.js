import React, { useEffect, useState } from "react";
import useTools from "../Hooks/useTools";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProducts = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(" https://polar-journey-63728.herokuapp.com/tools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  const [deletingtool, setDeletingTool] = useState(null);
  return (
    <div>
      <h2 className="text-2xl">Manage Products: {tools.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <ManageSingleProduct
                key={tool._key}
                tool={tool}
                index={index}
                setDeletingTool={setDeletingTool}
              ></ManageSingleProduct>
            ))}
          </tbody>
        </table>
      </div>
      {deletingtool && (
        <DeleteConfirmModal
          deletingtool={deletingtool}
          setDeletingTool={setDeletingTool}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
