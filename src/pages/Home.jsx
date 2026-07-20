import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TopRatedSection from "../components/TopRatedSection";
import NewArrivalSection from "../components/NewArrivalSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";

const Home = () => {
  const { products } = useContext(MyStore);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <HeroSection />

      <StatsSection />

      <CategorySection />

      <TopRatedSection />

      <NewArrivalSection />

      <FeaturesSection />

      <Footer />
    </div>
  );
};

export default Home;
