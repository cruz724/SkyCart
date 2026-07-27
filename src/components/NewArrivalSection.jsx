import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";
import MiniProductCard from "./MiniProductCard";

const NewArrival = () => {
  const navigate = useNavigate();

  const { newArrivals } = useContext(MyStore);

  return (
    <section className="bg-white border border-gray-200/85 rounded-3xl p-6 md:p-8 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>

          <button
            onClick={() => navigate("/shop")}
            className="text-sm font-semibold text-lime-500 hover:text-lime-600 transition cursor-pointer"
          >
            See All →
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {newArrivals.slice(0, 5).map((product) => (
            <MiniProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;