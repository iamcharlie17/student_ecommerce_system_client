const Price = () => {
  return (
    <div className="flex gap-2">
      <div>
        <label htmlFor="min">Min Price</label>
        <br />
        <input
          type="number"
          name="min"
          className="w-2/3 rounded-full border p-2"
        />
      </div>
      <div>
        <label htmlFor="max">Max Price</label>
        <br />
        <input
          type="number"
          name="max"
          className="w-2/3 rounded-full border p-2"
        />
      </div>
    </div>
  );
};

export default Price;
