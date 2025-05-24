import React, { useState, useEffect } from "react";
import { categories } from "../Category";
import useProduct from "../../hooks/useProduct";

const EditItemModal = ({ isOpen, onClose, item }) => {
  const [formData, setFormData] = useState(null);
  const {handleEditItem} = useProduct();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [images, setImages] = useState(item.images);
  const [condition, setCondition] = useState(item.condition);
  const [address, setAddress] = useState(item.location.address);
  const [lat, setLat] = useState(item.location.lat);
  const [lon, setLon] = useState(item.location.lon);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    if (item) {
      setFormData({
        title: item.title || "",
        description: item.description || "",
        category: item.category || "",
        images: item.images || [item.image || ""],
        condition: item.condition || "new",
        location: {
          address: item?.location?.address || "",
          lat: item?.location?.lat || 0,
          lon: item?.location?.lon || 0,
        },
        price: item.price || "",
      });
    }
  }, [item]);

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
        if (data.length > 0) {
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
    const updated = [...formData.images];
    updated[index] = value;
    setFormData({ ...formData, images: updated });
  };

  const handleAddImage = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await handleEditItem(item, item.id);
    onClose();
  };

  if (!isOpen || !formData) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="address"
            value={formData.location.address}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-2 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Description"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {formData.images.map((img, index) => (
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
