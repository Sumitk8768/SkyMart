import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router"
import { Auth } from "../context/AuthContext"
import { Cart } from "../context/CartContext"

const Navbar = () => {

  const [loggedInUser, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('log user')
    if (user) setUser(JSON.parse(user))
  }, [])

  let {isCartOpen,setIsCartOpen} = useContext(Cart)

  let { setLoggedInUser } = useContext(Auth)
  let navigate = useNavigate()

  let logOut = () => {
    localStorage.removeItem('log user');
    setLoggedInUser(null)
    navigate("/")
  }


  return (
    <div className="w-full h-16 flex justify-between items-center gap-3 py-5 px-4 md:px-20 lg:px-40 sticky top-0 z-50 backdrop-blur-md  border-white">
  <div className="flex items-center gap-2 shrink-0">
    <img
      className="w-8"
      src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/21/85/d1/2185d1ae-a5ad-5367-436c-10cba2a8913d/AppIcon-1x_U007epad-0-1-0-85-220-0.png/400x400ia-75.webp"
      alt=""
    />
    <h2 className="text-white text-xl md:text-2xl font-bold">
      Sky<span className="text-[#C8F400]">Mart</span>
    </h2>
  </div>

  <div className="hidden md:flex gap-8 text-gray-300">
    <NavLink end className={({isActive})=> isActive ? 'text-[#C8F400] hover:text-white transition' : "hover:text-white transition"} to='/home'>Home</NavLink>
    <NavLink className={({isActive})=> isActive ? 'text-[#C8F400] hover:text-white transition' : "hover:text-white transition"} to='products'>Shop</NavLink>
    <NavLink className={({isActive})=> isActive ? 'text-[#C8F400] hover:text-white transition' : "hover:text-white transition"} to='about'>About</NavLink>
  </div>

  <div className="flex items-center gap-2 md:gap-4">
    <div className="bg-[#191919] flex items-center gap-2 border border-gray-700 px-2 md:px-3 py-2 rounded-full">
      <div className="bg-lime-400 text-black w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
        {loggedInUser?.name?.[0] || "U"}
      </div>
      <span className="hidden sm:block text-sm text-gray-300">
        {loggedInUser?.name || "User"}
      </span>
    </div>

    <button
    onClick={()=> {
      setIsCartOpen(true)
    }}
     className="text-white border border-gray-700 py-2 px-3 rounded-2xl hover:bg-gray-800 transition">
      <i className="ri-shopping-cart-line"></i>
    </button>

    <button 
      className="text-white border border-gray-700 py-2 px-3 rounded-2xl hover:bg-gray-800 transition"
      onClick={() => logOut()}
    >
      <i className="ri-logout-box-r-line"></i>
    </button>
  </div>
</div>
  )
}

export default Navbar;