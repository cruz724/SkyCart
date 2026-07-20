import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const HeroSection = () => {
  const navigate = useNavigate();

  const { currentUser, products } = useContext(MyStore);

  return (
    <section className="border rounded-3xl p-10 bg-black text-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}

        <div>
          <p className="uppercase tracking-widest text-lime-400 text-sm">
            Good Afternoon 👋
          </p>

          <h1 className="text-6xl font-bold mt-5 leading-tight">
            Welcome back,
            <br />
            <span className="text-lime-400">
              {currentUser?.name || "Guest"}!
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-lg">
            Discover today's picks — hand-curated products across electronics,
            fashion and much more.
          </p>

          <div className="flex gap-5 mt-8">
            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 text-black font-semibold px-7 py-3 rounded-xl hover:scale-105 duration-300"
            >
              Shop Now →
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="border border-gray-600 px-7 py-3 rounded-xl hover:bg-white hover:text-black duration-300"
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-end">
          <div className="space-y-5">
            <div className="bg-lime-400/20 border border-lime-500 rounded-2xl p-8 text-center w-56">
              <h2 className="text-5xl font-bold text-lime-400">
                {products.length}+
              </h2>

              <p className="text-gray-300 mt-2">Products Available</p>
            </div>

            <div className="border rounded-2xl p-8 text-center w-56">
              <h2 className="text-4xl font-bold">Free</h2>

              <p className="text-gray-400 mt-2">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
