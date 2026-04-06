import Navbar from "../components/Navbar";
import CartDrawer from "../components/cart";
import { useCart } from "../context/CartContext";
import { Outlet } from "react-router";

const MainLayout = () => {

    const { isCartOpen, setIsCartOpen } = useCart();


  return (
    <div className="bg-[#0D0D0D]">
      <Navbar />
      <Outlet />
       <CartDrawer open={isCartOpen} setOpen={setIsCartOpen} />
    </div>
  )
}

export default MainLayout;
