import React, { useContext } from "react";
import { ProductContext } from "../providers/ProductsProvider";

const useProduct = () => {
  return useContext(ProductContext);
};

export default useProduct;
