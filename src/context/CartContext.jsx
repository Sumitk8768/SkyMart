import { createContext, useState, useContext } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); //  global cart control

  //  ADD TO CART
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    //  open cart globally
    setIsCartOpen(true); 
  };

  //  REMOVE ITEM
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  //  INCREASE
  const increase = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  //  DECREASE
  const decrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  //  CLEAR CART
  const clearCart = () => {
    setCartItems([]);
  };

  //  TOTAL ITEMS
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  //  TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <Cart.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        increase,
        decrease,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

//  Custom Hook (clean usage)
export const useCart = () => useContext(Cart);
