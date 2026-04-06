import ProductCard from "./ProductCard";

const ProductGrid = ({ productList, primary }) => {
  
console.log(productList)
  
  return (
    <div className="grid md:grid-cols-5 gap-6">
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} primary={primary} />
      ))}
    </div>
  );
};

export default ProductGrid;