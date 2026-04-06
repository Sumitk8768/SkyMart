import { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import CategorySection from "../components/home/CategorySection";
import ProductSection from "../components/home/ProductSection";
import TopRated from "../components/home/TopRated";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(Auth);

  return (
    <div>
      <div className="text-white min-h-screen px-6 md:px-20 lg:px-40 py-6 mt-8">
        {/* HERO SECTION */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          {/* Left */}
          <div className="mb-8 md:mb-0">
            <p className="text-[#C8F400] text-sm mb-2 uppercase tracking-wider">Good Evening 👋</p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Welcome back, <br />
              <span className="text-[#C8F400]">
                {loggedInUser?.name || "User"}!
              </span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => navigate("/home/products")}
                className="bg-[#C8F400] text-black px-6 py-3 rounded-3xl font-semibold hover:scale-105 transition w-full sm:w-auto"
              >
                Shop Now →
              </button>

              <button
                onClick={() => navigate("/home/products")}
                className="border border-gray-700 px-6 py-3 rounded-3xl hover:bg-gray-800 transition w-full sm:w-auto"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto">
            <div className="flex-1 bg-lime-400/10 border border-lime-400/20 p-4 md:p-6 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#C8F400]">20+</h2>
              <p className="text-gray-400 text-xs md:text-sm">Products</p>
            </div>

            <div className="flex-1 border border-gray-700 p-4 md:p-6 rounded-xl text-center">
              <h2 className="text-lg md:text-xl font-semibold">Free</h2>
              <p className="text-gray-400 text-xs md:text-sm">Shipping</p>
            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {[
            { icon: <i className="ri-box-3-line"></i>, val: "0", label: "Cart Items", sub: "In your bag", bgC: "bg-lime-400/20", color: "text-[#C8F400]" },
            { icon: "📈", val: "$0.00", label: "Cart Value", sub: "Ready to checkout", bgC: "bg-blue-400/20", color: "text-[#C8F400]" },
            { icon: <i className="ri-star-line"></i>, val: "5", label: "Top Products", sub: "Highly rated", bgC: "bg-yellow-400/20", color: "text-[#E0AB21]" },
            { icon: <i className="ri-price-tag-3-line"></i>, val: "6", label: "Categories", sub: "To explore", bgC: "bg-purple-400/20", color: "text-[#AC76E1]"},
          ].map((stat, i) => (
            <div key={i} className="bg-[#111111] border border-gray-800 p-6 rounded-3xl flex items-center gap-4">
              <div className={`${stat.bgC} ${stat.color} p-3 rounded-lg text-xl`}>{stat.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{stat.val}</h2>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-tighter opacity-60">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CATEGORY SECTION */}
        <CategorySection />

        {/* PRODUCT CATEGORY SECTION */}
        <div className="flex flex-col lg:flex-row gap-5 mt-10">
          <div className="flex-1">
            <TopRated />
          </div>
          <div className="flex-1">
            <NewArrivals />
          </div>
        </div>

        {/* Features SECTION */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fast Delivery */}
            <div className="border border-gray-800 rounded-3xl p-6 flex items-start gap-4 hover:bg-gray-900 transition">
              <div className="text-lime-400 text-2xl"><i className="ri-flashlight-line"></i></div>
              <div>
                <h3 className="font-semibold text-white">Fast Delivery</h3>
                <p className="text-gray-400 text-sm">Same-day on select items</p>
              </div>
            </div>

            {/* Secure Payments */}
            <div className="border border-gray-800 rounded-3xl p-6 flex items-start gap-4 hover:bg-gray-900 transition">
              <div className="text-blue-400 text-2xl"><i className="ri-shield-check-line"></i></div>
              <div>
                <h3 className="font-semibold text-white">Secure Payments</h3>
                <p className="text-gray-400 text-sm">100% encrypted checkout</p>
              </div>
            </div>

            {/* Best Prices */}
            <div className="border border-gray-800 rounded-3xl p-6 flex items-start gap-4 hover:bg-gray-900 transition">
              <div className="text-green-400 text-2xl"><i className="ri-price-tag-3-line"></i></div>
              <div>
                <h3 className="font-semibold text-white">Best Prices</h3>
                <p className="text-gray-400 text-sm">Price-match guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-10 text-center px-6">
        <h2 className="text-lime-400 text-lg font-bold mb-2 tracking-widest uppercase">
          SkyMart
        </h2>
        <p className="text-gray-500 text-xs md:text-sm">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
};

export default Home;