import React, { useState } from "react";
import { categories } from "../Category";
import useProduct from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";

const PostItemForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    images: [],
    condition: "new",
    location: {
      address: "",
      lat: 0,
      lon: 0,
    },
    price: "",
  });

  const { handleAddNewProduct } = useProduct();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "address") {
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, address: value },
      }));

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            value
          )}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setFormData((prev) => ({
            ...prev,
            location: {
              ...prev.location,
              lat: parseFloat(lat),
              lon: parseFloat(lon),
            },
          }));
        }
      } catch (error) {
        console.error("Geocoding failed:", error);
      }

      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const handleAddImage = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddNewProduct(formData, navigate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="address"
          value={formData.location.address}
          onChange={handleChange}
          placeholder="Location Address"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (৳)"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
      />

      <div className="space-y-4">
        <label className="block font-medium text-gray-700">Image URLs</label>
        {formData.images.map((img, index) => (
          <input
            key={index}
            type="text"
            value={img}
            onChange={(e) => handleImageChange(index, e.target.value)}
            placeholder={`Image URL ${index + 1}`}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
        >
          + Add Image
        </button>
      </div>

      <button
        type="submit"
        className="bg-yellow-400 w-full hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default PostItemForm;
