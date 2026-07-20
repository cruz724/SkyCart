import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Same-day delivery on select products.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      desc: "100% encrypted transactions.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      desc: "Competitive pricing on every item.",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 mt-20">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="border rounded-2xl p-8 hover:shadow-lg transition"
        >
          <p className="text-5xl">{feature.icon}</p>

          <h2 className="font-semibold text-xl mt-5">{feature.title}</h2>

          <p className="text-gray-500 mt-3">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
