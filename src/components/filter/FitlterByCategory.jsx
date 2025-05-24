import React from "react";

const FitlterByCategory = ({categories}) => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Filter by Category</h2>
      <div className="space-y-2 text-sm text-gray-700">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="category"
              value={category.name}
              className="accent-blue-600"
            />
            <span className="flex items-center gap-1 capitalize">
              {category.icon}
              {category.name.replace("_", " ")}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FitlterByCategory;
