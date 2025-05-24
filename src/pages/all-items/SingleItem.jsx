const SingleItem = ({ item }) => {
  return (
    <div className="shadow-xl rounded-lg p-4 bg-white shadow hover:shadow-md transition">
      <img
        className="w-full h-48 object-cover rounded-md mb-4"
        src={item.images || "https://via.placeholder.com/300"}
        alt={item.title}
      />
      <div className="text-gray-800">
        <h1 className="text-lg font-bold mb-1">{item.title}</h1>
        <p className="text-sm mb-1">Location: {item.location.address}</p>
        <p className="text-sm font-semibold">৳ {item.price}</p>
      </div>
    </div>
  );
};

export default SingleItem;
