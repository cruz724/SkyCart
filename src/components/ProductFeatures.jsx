import React from "react";
import FeatureCard from "./FeatureCard";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

const ProductFeatures = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6 mt-14">
      <FeatureCard
        icon={<Truck size={32} />}
        title="Free Delivery"
        subtitle="On orders $50+"
      />

      <FeatureCard
        icon={<ShieldCheck size={32} />}
        title="Secure Pay"
        subtitle="256-bit SSL"
      />

      <FeatureCard
        icon={<RotateCcw size={32} />}
        title="Easy Returns"
        subtitle="30-day policy"
      />
    </section>
  );
};

export default ProductFeatures;
