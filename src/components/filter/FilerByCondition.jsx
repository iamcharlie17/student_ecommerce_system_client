const conditions = ["like_new", "good", "fair", "used", "bad"];

const FilterByCondition = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Filter by Condition</h2>
      <div className="space-y-2 text-sm text-gray-700">
        {conditions.map((condition, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="condition"
              value={condition}
              className="accent-blue-600"
            />
            <span>{condition.replace("_", " ")}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterByCondition;
