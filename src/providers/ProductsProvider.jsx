import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const res = await axios.get("/items.json");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const handleDeleteProduct = async (id) => {
    setItems(items.filter(p => p.id !== id));
  }

  const handleAddNewProduct = async (product) => {
    setItems([...items, {
        id: items.length + 1,
        ...product
    }])
  }

  return (
    <ProductContext.Provider value={{ items, handleDeleteProduct, handleAddNewProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ItemsProvider;
