import { useNavigate } from "react-router";
import { useProduct } from "../../context/ProductContext";
import { useContext } from "react";
import { Cart } from "../../context/CartContext";

const NewArrivals = () => {
  const { productList } = useProduct();
  const { addToCart } = useContext(Cart);
  let navigate = useNavigate();

  const newArrivals = productList.slice(0, 5);

  return (
    <div className="bg-[#111111] text-black p-6 rounded-2xl w-full">      
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg flex items-center gap-2 text-gray-300">
          <button
            onClick={() => navigate('/home/products')}
            className="text-[#C8F400]"
          >
            <i className="ri-flashlight-line"></i>
          </button>
          New Arrivals
        </h2>

        <span
          onClick={() => navigate('/home/products')}
          className="text-[#C8F400] text-sm cursor-pointer"
        >
          See all →
        </span>
      </div>

      <div className="space-y-3">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#111111] border border-gray-400 p-3 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.thumbnail}
                className="w-10 h-10 rounded-md object-cover"
              />
              <p className="text-lime-500 font-medium">
                ${item.price}
              </p>
            </div>

            <button
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.title,
                  price: item.price,
                  image: item.thumbnail,
                })
              }
              className="bg-lime-200 border cursor-pointer py-2 px-3 rounded-2xl hover:bg-[#C8F400] transition"
            >
              <i className="ri-shopping-cart-line"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;