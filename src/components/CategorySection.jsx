import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const navigate = useNavigate();

  const { categories, products } = useContext(MyStore);

  return (
    <section className="mt-16">
      {/* Heading */}

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Shop by Category</h1>

        <button
          onClick={() => navigate("/shop")}
          className="text-lime-500 font-semibold hover:underline"
        >
          View All →
        </button>
      </div>

      {/* Categories */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            count={
              products.filter((product) => product.category === category).length
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
