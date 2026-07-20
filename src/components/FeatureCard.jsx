import React from "react";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="border rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
      <div className="text-lime-500 mb-3">{icon}</div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
