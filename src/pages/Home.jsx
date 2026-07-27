import React from "react";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TopRatedSection from "../components/TopRatedSection";
import NewArrivalSection from "../components/NewArrivalSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-20">
      <HeroSection />

      <StatsSection />

      <CategorySection />

      <div className="grid md:grid-cols-2 gap-10">
        <TopRatedSection />
        <NewArrivalSection />
      </div>

      <FeaturesSection />

      <Footer />
    </div>
  );
};

export default Home;
