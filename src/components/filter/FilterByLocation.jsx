
const FilterByLocation = () => {
  return (
    <div>
      <label htmlFor="location">Filter by location</label>
      <input
        type="text"
        name="location"
        id="location"
        className="border p-2 w-full rounded-full"
        placeholder="Enter location"
      />
    </div>
  );
};

export default FilterByLocation;
