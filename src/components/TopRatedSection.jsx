import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";
import MiniProductCard from "./MiniProductCard";

const TopRated = () => {
  const navigate = useNavigate();

  const { topRatedProducts } = useContext(MyStore);

  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Top Rated</h1>

        <button
          onClick={() => navigate("/shop")}
          className="text-lime-500 font-semibold"
        >
          See All →
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {topRatedProducts.map((product) => (
          <MiniProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
