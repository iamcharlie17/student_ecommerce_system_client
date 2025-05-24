import Button from "../../components/Button";
import AddProductModal from "../../components/modals/AddProductModal";
import useProduct from "../../hooks/useProduct";
import MySingleProduct from "./MySingleProduct";

const MyProducts = () => {
  const { products } = useProduct();

  return (
    <div className="p-6 bg-white h-screen shadow overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          My Products ({products.length})
        </h2>
        <label htmlFor="add_product" className={`w-64 btn border-none rounded-none hover:scale-105 bg-[#7ca942]`}>
          + Add New Product
        </label>
      </div>

      <AddProductModal id={"add_product"}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <li
            key={index}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <MySingleProduct product={product} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
