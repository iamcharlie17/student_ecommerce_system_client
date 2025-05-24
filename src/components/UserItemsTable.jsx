import React from "react";
import UserItemRow from "./UserItemRow";

const UserItemsTable = ({ userItems }) => {
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
            <UserItemRow key={item.id} item={item} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserItemsTable;
