import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import useProduct from "../../hooks/useProduct";
import { useState, useEffect } from "react";

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { items } = useProduct();

  useEffect(() => {
    if (items.length > 0) {
      const foundItem = items.find((i) => i.id == id);
      setItem(foundItem);
    }
  }, [id, items]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-900 px-10 md:px-32 py-4 text-white">
        <Nav />
      </div>
      <div className="mx-32 bg-white">
        <img src={item.images[0]} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetails;
