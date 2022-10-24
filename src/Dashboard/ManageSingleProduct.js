import React from "react";

const ManageSingleProduct = ({ tool, index, setDeletingTool }) => {
  const { _id, name, img, des, minOrderQuantity, availQuantity, price } = tool;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{des}</td>
      <td>{minOrderQuantity}</td>
      <td>{availQuantity}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeletingTool(tool)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
