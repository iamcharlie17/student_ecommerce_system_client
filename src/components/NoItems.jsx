import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const NoItems = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h2 className="text-lg font-semibold mb-2">Dear {user?.name},</h2>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
        alt="Box Icon"
        className="w-20 h-20 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">
        You don't have any items yet.
      </h3>
      <p className="text-gray-600 mb-4">
        Click the Post an item now! button to post your item.
      </p>
      <Link to="/post-item">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition duration-200">
          Post your item now!
        </button>
      </Link>
    </div>
  );
};

export default NoItems;
