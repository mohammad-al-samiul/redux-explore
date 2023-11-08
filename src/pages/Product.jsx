import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/slices/CartSlice";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const product = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(product));
    toast.success("Product add successfully");
  };

  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
    toast.error("Product Remove Successfully");
  };

  const { id, title, category, price, image, description } = product;
  return (
    <div>
      <div className="h-[500px] card w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="w-52 rounded-xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p> {description.split(" ").slice(0, 10).join(" ") + "..."} </p>
          <p>Price : ${price} </p>
          <div className="card-actions">
            {cart.some((item) => item.id === id) ? (
              <button
                onClick={() => handleRemoveToCart( id)}
                className="btn btn-primary"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
