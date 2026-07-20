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
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="border rounded-2xl p-6 bg-white hover:shadow-lg duration-300"
        >
          <p className="text-3xl">{item.icon}</p>

          <h2 className="text-3xl font-bold mt-4">{item.value}</h2>

          <p className="font-semibold mt-2">{item.title}</p>

          <p className="text-gray-500 text-sm">{item.subtitle}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
