import { createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import { axiosPublic } from "../hooks/useAxiosPublic";

export const ProductContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState(false);
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await axiosPublic("/products/");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, [control]);

  const handleDeleteItem = async (id) => {
    try {
      setLoading(true);
      const res = await axiosPrivate.delete(`/products/delete/${id}/`);
      if (res.status == 204) {
        setControl(!control);
      } else {
        toast.error("Something Error!!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNewProduct = async (product, navigate) => {
    console.log(product);
    try {
      setLoading(true);
      const res = await axiosPrivate.post("/products/create/", product);
      if (res.status == 201) {
        toast.success("Success!!");
        navigate("/account");
        setControl(!control);
      } else {
        toast.error("Something Error!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error!!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditItem = async (item, id) =>{
    console.log(item);
    try {
        setLoading(true);
        const res = await axiosPrivate.put(`/products/update/${id}/`, item);
        if(res.status == 200) {
            setControl(!control);
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{ items, handleDeleteItem, handleAddNewProduct, loading, handleEditItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ItemsProvider;
