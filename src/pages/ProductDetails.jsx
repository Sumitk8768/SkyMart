import { useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import { useContext } from "react";
import { Cart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { productList } = useProduct();
  const { addToCart } = useContext(Cart);

  const product = productList.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="p-10 text-white">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.thumbnail}
          className="w-full md:w-1/3 bg-white p-5 rounded-2xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-400 mb-3">
            {product.description}
          </p>

          <p className="text-[#C8F400] text-2xl font-bold mb-3">
            ${product.price}
          </p>

          <p className="text-sm text-gray-400 mb-2">
            Rating: {product.rating}
          </p>

          <p className="text-sm text-gray-400 mb-4">
            Stock: {product.stock}
          </p>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.thumbnail,
              })
            }
            className="bg-[#C8F400] text-black px-6 py-3 rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;