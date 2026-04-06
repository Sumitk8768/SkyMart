import { Navigate, useNavigate } from "react-router";
const categories = [
  {
    name: "Electronics",
    items: 17,
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    name: "Clothing",
    items: 2,
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    name: "Furniture",
    items: 3,
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    name: "Home",
    items: 14,
    image: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
  },
  {
    name: "Sports",
    items: 8,
    image: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
  },
  {
    name: "Accessories",
    items: 6,
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  },
];

const CategorySection = () => {
  let navigate = useNavigate();

  return (
    <div className="mb-10">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <button
          onClick={() => console.log("done")}
          className="text-[#C8F400] hover:underline cursor-pointer"
        >
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-[#111111] text-gray-300 border border-gray-300 p-6 rounded-3xl cursor-pointer text-center hover:shadow-md transition"
          >
            <div className="flex justify-center mb-3">
              <img src={cat.image} alt={cat.name} className="w-10 h-10" />
            </div>

            <h3 className="font-semibold">{cat.name}</h3>
            <p className="text-sm text-gray-600">{cat.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
