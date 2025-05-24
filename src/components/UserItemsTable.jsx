import React from "react";
import useProduct from "../hooks/useProduct";

const UserItemsTable = ({ userItems }) => {
  const { handleDeleteItem } = useProduct();
  return (
    <div className="overflow-x-auto bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {userItems.map((item, idx) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 transition duration-150"
            >
              <td className="px-4 py-3 font-medium text-gray-700">{idx + 1}</td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt="Item img"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-800 font-medium">
                {item.title}
              </td>
              <td className="px-4 py-3 text-green-600 font-semibold">
                ${item.price}
              </td>
              <td className="px-4 py-3 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserItemsTable;
