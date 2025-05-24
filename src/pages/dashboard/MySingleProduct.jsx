import React from "react";
import { CiEdit } from "react-icons/ci";
import useProduct from "../../hooks/useProduct";

const MySingleProduct = ({ product }) => {
    const {handleDeleteProduct} = useProduct();
  return (
    <div className="flex w-full space-x-2 sm:space-x-4 text-black shadow-xl">
      <img
        className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
        src={product.image[0]}
        alt="Polaroid camera"
      />
      <div className="flex flex-col justify-between w-full pb-4">
        <div className="flex justify-between w-full pb-2 space-x-2">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
              {product.title}
            </h3>
            <p>{product.category}</p>
          </div>
          <div className="text-right">
            <p>{product.price} bdt</p>
          </div>
        </div>
        <div className="flex text-sm divide-x">
          <button
          onClick={()=>handleDeleteProduct(product.id)}
            type="button"
            className="flex items-center px-2 py-1 pl-0 space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current"
            >
              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
              <rect width="32" height="200" x="168" y="216"></rect>
              <rect width="32" height="200" x="240" y="216"></rect>
              <rect width="32" height="200" x="312" y="216"></rect>
              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
            </svg>
            <span>Delete</span>
          </button>
          <button
            type="button"
            className="flex items-center px-2 py-1 space-x-1"
          >
            <CiEdit />
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleProduct;
