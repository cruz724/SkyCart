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
    <section className="grid md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300 flex gap-6 items-start"
        >
          <div className="text-3xl bg-lime-50/70 border border-lime-100 text-lime-600 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-950">{feature.title}</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
