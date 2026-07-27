import React from "react";

const icons = {
  electronics: "💻",
  "men's clothing": "👔",
  "women's clothing": "👗",
  jewelery: "💍",
};

const CategoryCard = ({ category, count, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-black hover:-translate-y-1.5 transition duration-300 cursor-pointer group flex flex-col justify-between h-56"
    >
      <div className="text-3xl bg-gray-50 border border-gray-100 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-black group-hover:text-white transition duration-300">
        {icons[category] || "📦"}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-950 capitalize group-hover:text-lime-600 transition">
          {category}
        </h3>
        <p className="text-sm font-medium text-gray-400 mt-1">{count} Products</p>
      </div>
    </div>
  );
};

export default CategoryCard;
