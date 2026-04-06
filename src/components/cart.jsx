import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, setOpen }) => {
  const {
    cartItems,
    increase,
    decrease,
    removeItem,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[360px] md:w-[400px] bg-[#0d0d0d] text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <i className="ri-shopping-bag-line text-xl text-[#DCFF00]"></i>
            <h2 className="text-lg font-semibold">
              Cart{" "}
              <span className="text-[#DCFF00] text-sm">
                {cartItems.length} items
              </span>
            </h2>
          </div>

          <button onClick={() => setOpen(false)}>
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <i className="ri-shopping-cart-line text-4xl mb-2"></i>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-gray-800 rounded-2xl p-3 bg-[#111]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 object-contain bg-white rounded-xl p-1"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-[#DCFF00] font-semibold text-sm mt-1">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="w-7 h-7 flex items-center justify-center bg-[#1a1a1a] rounded-md hover:bg-gray-700"
                    >
                      <i className="ri-subtract-line"></i>
                    </button>

                    <span className="text-sm">{item.qty}</span>

                    <button
                      onClick={() => increase(item.id)}
                      className="w-7 h-7 flex items-center justify-center bg-[#1a1a1a] rounded-md hover:bg-gray-700"
                    >
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <i className="ri-delete-bin-6-line text-lg"></i>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-auto px-5 py-4 border-t border-gray-800 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Total</span>
            <span className="text-lg font-bold text-white">
              ${totalPrice}
            </span>
          </div>

          <button className="w-full bg-[#DCFF00] text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
            Checkout
            <i className="ri-arrow-right-line"></i>
          </button>

          <button
            onClick={clearCart}
            className="w-full text-sm text-gray-500 hover:text-white"
          >
            Clear cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;