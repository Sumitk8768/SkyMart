const ProductFilter = () => {
  return (
  
    <div className="border border-gray-300 rounded-xl p-6 flex flex-col md:flex-row gap-4 mb-10">

      {/* SEARCH INPUT SECTION */}
      <div className="flex-1 flex items-center rounded-xl bg-[#1D1D1D] outline  px-4 py-1">
        <i className="ri-search-line text-gray-400 text-lg"></i>
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 p-2 bg-transparent  outline-none text-white placeholder-gray-400 text-sm md:text-base"
        />
      </div>

      {/* SELECTS SECTION */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <select className="flex-1 md:w-48 bg-[#1D1D1D] text-gray-300 border border-gray-400 rounded-xl px-4 py-2.5 outline-none focus:border-[#C8F400] transition text-sm cursor-pointer">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>

        <select className="flex-1 md:w-40 bg-[#1D1D1D] text-gray-300 border border-gray-400 rounded-xl px-4 py-2.5 outline-none focus:border-[#C8F400] transition text-sm cursor-pointer">
          <option>Featured</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;