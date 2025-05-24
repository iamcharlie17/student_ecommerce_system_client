const FilterByUniversity = () => {
  return (
    <div>
      <label htmlFor="university">Filter by University</label>
      <input
        type="text"
        name="university"
        id="university"
        className="border w-full p-2 rounded-full"
        placeholder="Enter University name"
      />
    </div>
  );
};

export default FilterByUniversity;
