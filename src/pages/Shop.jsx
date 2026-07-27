import React, { useContext, useState, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import { useLocation } from "react-router";

const Shop = () => {
  const { products, addToCart, categories } = useContext(MyStore);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.category || "All"
  );
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  // Filtering & Sorting Logic
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === "price-low-to-high") {
        return a.price - b.price;
      } else if (sortOption === "price-high-to-low") {
        return b.price - a.price;
      } else if (sortOption === "rating-high-to-low") {
        return b.rating.rate - a.rating.rate;
      } else if (sortOption === "rating-low-to-high") {
        return a.rating.rate - b.rating.rate;
      }
      return 0;
    });

  const allCategories = ["All", ...categories];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Shop Our Collection
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          Find the best products curated just for you.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-gray-100">

        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition duration-200"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
            Sort by:
          </span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="rating-high-to-low">Rating: High to Low</option>
            <option value="rating-low-to-high">Rating: Low to High</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition duration-200 whitespace-nowrap border capitalize cursor-pointer
              ${selectedCategory === category
                ? "bg-black text-white border-black shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-black"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-dashed rounded-2xl">
          <p className="text-gray-400 text-lg">
            No products found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSortOption("featured");
            }}
            className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm font-medium cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;

