import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const HeroSection = () => {
  const navigate = useNavigate();

  const { currentUser, products } = useContext(MyStore);

  return (
    <section className="border rounded-3xl p-6 sm:p-10 bg-black text-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}

        <div>
          <p className="uppercase tracking-widest text-lime-400 text-sm">
            Good Afternoon 👋
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Welcome back,
            <br />
            <span className="text-lime-400">
              {currentUser?.name || "Guest"}!
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-lg">
            Discover today's picks — hand-curated products across electronics,
            fashion and much more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
            <button
              onClick={() => navigate("/shop")}
              className="bg-lime-400 text-black font-semibold px-7 py-3 rounded-xl hover:scale-105 duration-300 cursor-pointer text-center"
            >
              Shop Now →
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="border border-gray-600 px-7 py-3 rounded-xl hover:bg-white hover:text-black duration-300 cursor-pointer text-center"
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-5 w-full sm:w-auto items-center">
            <div className="bg-lime-400/20 border border-lime-500 rounded-2xl p-8 text-center w-full sm:w-56">
              <h2 className="text-4xl sm:text-5xl font-bold text-lime-400">
                {products.length}+
              </h2>

              <p className="text-gray-300 mt-2 text-sm sm:text-base">Products Available</p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-8 text-center w-full sm:w-56">
              <h2 className="text-3xl sm:text-4xl font-bold">Free</h2>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
