import { createContext, useContext, useEffect, useState } from "react";

export const Product = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductList(data.products);
    };
    fetchData();
  }, []);

  return (
    <Product.Provider value={{ productList }}>
      {children}
    </Product.Provider>
  );
};

export const useProduct = () => useContext(Product);