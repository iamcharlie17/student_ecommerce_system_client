import { useState } from "react";
import Button from "../Button";
import useProduct from "../../hooks/useProduct";

const AddProductModal = ({ id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageList, setImageList] = useState([]);

  const {handleAddNewProduct} = useProduct();

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setImageList([...imageList, imageUrl.trim()]);
      setImageUrl("");
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const product = {
      title,
      description,
      price: parseFloat(price),
      category,
      condition,
      image: imageList,
    };

    await handleAddNewProduct(product);

    document.getElementById(id).checked = false; 
  };

  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Product</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Product Title"
              className="input input-bordered w-full"
              required
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
            <input
              type="number"
              step="0.01"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Category"
              className="input input-bordered w-full"
              required
            />
            <select
              onChange={(e) => setCondition(e.target.value)}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>

            <div className="flex gap-2">
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                type="url"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>

            {imageList.length > 0 && (
              <div className="bg-gray-100 p-2 rounded text-black">
                <p className="font-semibold">Added Images:</p>
                <ul className="list-disc list-inside text-sm">
                  {imageList.map((img, index) => (
                    <li key={index}>{img}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-action flex justify-between items-center">
              <Button type="success">Add Product</Button>
              <label htmlFor={id} className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </div>
  );
};

export default AddProductModal;
