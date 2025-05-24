import React, { useState } from "react";
import useProduct from "../hooks/useProduct";
import EditItemModal from "./modals/EditItemModal";

const UserItemRow = ({ item, idx }) => {
  const { handleDeleteItem, handleUpdateItem } = useProduct();
  const [showModal, setShowModal] = useState(false);

  const handleModalSubmit = async (id, updatedData) => {
    await handleUpdateItem(id, updatedData);
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition duration-150">
        <td className="px-4 py-3">{idx + 1}</td>
        <td className="px-4 py-3">
          <div className="h-12 w-12 overflow-hidden rounded-md">
            <img
              src={item.image}
              alt="Item img"
              className="w-full h-full object-cover"
            />
          </div>
        </td>
        <td className="px-4 py-3">{item.title}</td>
        <td className="px-4 py-3 text-green-600 font-semibold">
          ${item.price}
        </td>
        <td className="px-4 py-3 space-x-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold"
          >
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

      <EditItemModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        item={item}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default UserItemRow;
