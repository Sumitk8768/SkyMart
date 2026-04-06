import ProductGrid from "../components/shop/ProductGrid";
import ProductFilter from "../components/shop/ProductFilter";
import { useState ,useEffect } from "react";

const Products = () => {
  const primary = "#C8F400";

  let [productList , setProductList] = useState([])

  useEffect(() => {
const getProducts = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    setProductList(data.products); 
  } catch (error) {
    console.log(error);
  }
};

getProducts()
 }, []);


  return (

    <div className="text-white min-h-screen px-6 md:px-20 lg:px-45 py-10">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">All Products</h1>
        <p className="text-gray-400">50 products found</p>
      </header>

      {/* FILTER */}
      <section className="mb-10">
        <ProductFilter />
      </section>

      {/* GRID */}
      <main>
        <ProductGrid productList ={productList} primary={primary} />
      </main>

    </div>
  );
};

export default Products;