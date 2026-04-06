const products = [
  { price: "$599.99" },
  { price: "$199.99" },
  { price: "$349.99" },
  { price: "$49.99" },
  { price: "$149.99" },
];

const ProductSection = ({ title }) => {
  return (
    <div className="bg-gray-100 text-black p-6 rounded-2xl mb-10">
      
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-lime-500 cursor-pointer">See all →</span>
      </div>

      <div className="space-y-4">
        {products.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-white p-4 rounded-xl border"
          >
            <span>{item.price}</span>
            <button className="bg-lime-200 p-2 rounded-lg">🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;