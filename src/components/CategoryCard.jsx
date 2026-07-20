import React from "react";

const icons = {
  electronics: "💻",
  "men's clothing": "👔",
  "women's clothing": "👗",
  jewelery: "💍",
};

const CategoryCard = ({ category, count }) => {
  return (
    <div className="bg-white border rounded-2xl p-8 hover:shadow-lg transition duration-300 cursor-pointer">
      <div className="text-5xl">{icons[category] || "📦"}</div>

      <h2 className="text-2xl font-semibold mt-6 capitalize">{category}</h2>

      <p className="text-gray-500 mt-2">{count} Products</p>
    </div>
  );
};

export default CategoryCard;
