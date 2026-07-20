import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import RelatedProductCard from "./RelatedProductCard";

const RelatedProducts = ({ product }) => {
  const { products } = useContext(MyStore);

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-20">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Related Products
        </h1>

        <button className="text-lime-500 font-semibold">
          View More →
        </button>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {relatedProducts.map((item) => (
          <RelatedProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;