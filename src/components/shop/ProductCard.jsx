import { useContext } from "react";
import { Cart } from "../../context/CartContext";
import { useNavigate } from "react-router";

const ProductCard = ({ item, primary }) => {
  const { addToCart } = useContext(Cart);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/home/product/${item.id}`)}
      className="group bg-gray-100 border border-gray-400 text-black rounded-2xl flex flex-col h-full hover:border-[#DCFF00] hover:shadow overflow-hidden cursor-pointer"
    >
      <div className="p-3 bg-white">
        <img
          src={item.thumbnail}
          className="w-full h-32 object-contain"
        />
      </div>

      <div className="bg-[#111] text-white p-4 flex flex-col justify-between">
        <div>
          <p className="text-gray-400 text-xs">{item.category}</p>
          <h3 className="text-sm font-semibold">{item.title}</h3>

          <div className="flex items-center text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={
                  i < Math.floor(item.rating)
                    ? "ri-star-fill"
                    : "ri-star-line"
                }
              ></i>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-[#C8F400]">
            ${item.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: item.id,
                name: item.title,
                price: item.price,
                image: item.thumbnail,
              });
            }}
            className="bg-[#C8F400] px-3 py-1 rounded text-black"
          >
            <i className="ri-shopping-cart-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;