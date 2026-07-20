import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { products, addToCart } = useContext(MyStore);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
