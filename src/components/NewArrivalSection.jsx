import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";
import MiniProductCard from "./MiniProductCard";

const NewArrival = () => {
  const navigate = useNavigate();

  const { newArrivals } = useContext(MyStore);

  return (
    <section className="mt-20">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          New Arrivals
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="text-lime-500 font-semibold"
        >
          See All →
        </button>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {newArrivals.map((product) => (
          <MiniProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default NewArrival;