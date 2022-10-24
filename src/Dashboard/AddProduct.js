import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "f48d558321341465fa1c41df44246719";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    console.log("data-recieved", data);
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            des: data.description,
            minOrderQuantity: data.minquantity,
            availQuantity: data.stock,
            price: data.price,
            img: img,
          };

          console.log("data-db", product);

          // send to your database
          fetch(" https://polar-journey-63728.herokuapp.com/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Tools");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">MinQuantity</span>
          </label>
          <input
            type="text"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minquantity", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Stock</span>
          </label>
          <input
            type="text"
            placeholder="In Stock"
            className="input input-bordered w-full max-w-xs"
            {...register("stock", {
              required: {
                value: true,
                message: "In Stock is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
        </div>

        <input
          className="btn mt-2 w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
