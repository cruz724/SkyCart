import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const StatsSection = () => {
  const { cartProducts, categories, topRatedProducts } = useContext(MyStore);

  const cartItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  const cartValue = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const stats = [
    {
      title: "Cart Items",
      value: cartItems,
      subtitle: "In your bag",
      icon: "📦",
    },
    {
      title: "Cart Value",
      value: `$${cartValue.toFixed(2)}`,
      subtitle: "Ready to checkout",
      icon: "💰",
    },
    {
      title: "Top Products",
      value: topRatedProducts.length,
      subtitle: "Highly Rated",
      icon: "⭐",
    },
    {
      title: "Categories",
      value: categories.length,
      subtitle: "To Explore",
      icon: "🏷️",
    },
  ];

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200/80 rounded-3xl p-6 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center gap-5"
        >
          <div className="text-3xl bg-gray-50 border border-gray-100 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {item.title}
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-0.5">
              {item.value}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
