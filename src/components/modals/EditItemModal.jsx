import React, { useState, useEffect } from "react";
import { categories } from "../Category";
import useProduct from "../../hooks/useProduct";

const EditItemModal = ({ isOpen, onClose, item }) => {
  const { handleEditItem } = useProduct();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([""]);
  const [condition, setCondition] = useState("new");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (item) {
      setTitle(item.title || "");
      setDescription(item.description || "");
      setCategory(item.category || "");
      setImages(item.images || [item.image || ""]);
      setCondition(item.condition || "new");
      setAddress(item?.location?.address || "");
      setLat(item?.location?.lat || 0);
      setLon(item?.location?.lon || 0);
      setPrice(item.price || "");
    }
  }, [item]);

  const handleAddressChange = async (value) => {
    setAddress(value);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLat(parseFloat(lat));
        setLon(parseFloat(lon));
      }
    } catch (error) {
      console.error("Geocoding failed:", error);
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    setImages((prev) => [...prev, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = {
      title,
      description,
      category,
      images,
      condition,
      location: {
        address,
        lat,
        lon,
      },
      price: parseFloat(price),
      sold: true
    };

    await handleEditItem(updatedItem, item.id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => handleAddressChange(e.target.value)}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full border p-2 rounded"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Description"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {images.map((img, index) => (
            <input
              key={index}
              type="text"
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              className="w-full border p-2 rounded"
              placeholder={`Image ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={handleAddImage}
            className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            + Add Image
          </button>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
