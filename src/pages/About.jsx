import { useNavigate } from "react-router";

let Items = [
  { icon: <i className="ri-box-3-line"></i>, value: "20K+", label: "Products" },
  { icon: <i className="ri-group-line"></i>, value: "50K+", label: "Happy Customers" },
  { icon: <i className="ri-star-line"></i>, value: "4.9", label: "Avg. Rating" },
  { icon: <i className="ri-truck-line"></i>, value: "99%", label: "On-time Delivery" },
]

let Item2 = [
  { icon: <i className="ri-shield-check-line"></i>, title: "Trust", desc: "Every product is verified for quality and authenticity before listing." },
  { icon: <i className="ri-truck-line"></i>, title: "Speed", desc: "We obsess over delivery times so your orders arrive when promised." },
  { icon: <i className="ri-service-line"></i>, title: "Community", desc: "Built around real customer feedback, not just business metrics." },
  { icon: <i className="ri-star-line"></i>, title: "Quality", desc: "We curate the best — no filler, no junk, just great products." },
]

const About = () => {
  const navigate = useNavigate();
  const primary = "#C8F400";

  return (
    <div className="bg-[#0D0D0D]">
      <div className="text-white min-h-screen px-6 md:px-20 lg:px-40 xl:px-60 py-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div
            style={{ backgroundColor: primary }}
            className="text-black w-16 h-16 flex items-center justify-center rounded-3xl mx-auto mb-4 text-2xl overflow-hidden"
          >
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/21/85/d1/2185d1ae-a5ad-5367-436c-10cba2a8913d/AppIcon-1x_U007epad-0-1-0-85-220-0.png/400x400ia-75.webp"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            About <span style={{ color: primary }}>SkyMart</span>
          </h1>

          <p className="text-[#6C6C6C] mt-4 max-w-2xl text-lg md:text-xl font-semibold mx-auto">
            SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Items.map((item, i) => (
            <div key={i} className="border border-gray-300 p-6 rounded-xl text-center">
              <div style={{ color: primary }} className="text-xl mb-2">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-[#6C6C6C] text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* STORY */}
        <div className="border border-gray-300 rounded-2xl p-6 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-[#6C6C6C] mb-4 font-semibold">
            SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <span className="italic">enjoyable</span>?
          </p>

          <p className="text-[#6C6C6C] mb-4 font-semibold">
            Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don’t require a second mortgage.
          </p>

          <p className="text-[#6C6C6C] font-semibold">
            We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
          </p>
        </div>

        {/* VALUES */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {Item2.map((item, i) => (
            <div key={i} className="border border-gray-400 p-6 hover:border-[#d7ed72] rounded-xl flex flex-col sm:flex-row gap-4">
              <div
                style={{ backgroundColor: "#23280F", color: primary }}
                className="p-4 rounded-2xl text-2xl w-fit h-fit"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { name: "Aryan Shah", role: "Founder & CEO", color: "#C8F400", letter: "A" },
            { name: "Priya Mehta", role: "Head of Product", color: "#3B82F6", letter: "P" },
            { name: "Rohan Verma", role: "Lead Engineer", color: "#A855F7", letter: "R" },
            { name: "Sneha Kapoor", role: "Design Director", color: "#EF4444", letter: "S" },
          ].map((member, i) => (
            <div key={i} className="border border-gray-300 p-6 rounded-xl text-center">
              <div
                style={{ backgroundColor: member.color }}
                className="w-12 h-12 flex items-center justify-center rounded-xl mx-auto mb-3 text-black font-bold"
              >
                {member.letter}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{ borderColor: `${primary}40` }}
          className="border rounded-2xl p-6 md:p-10 text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to shop?</h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/shop")}
            style={{ backgroundColor: primary }}
            className="text-black px-8 py-3 rounded-xl font-semibold hover:bg-[#d7ed72] cursor-pointer transition-colors w-full sm:w-auto"
          >
            Browse Products →
          </button>
        </div>

       
      </div>
       {/* FOOTER */}
        <div className="border-t border-gray-300 pt-6 mb-8 text-center">
          <h2 style={{ color: primary }} className="font-semibold">
            SkyMart
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 SkyMart • Built with React + Redux + TanStack Query
          </p>
        </div>
    </div>
  );
};

export default About;