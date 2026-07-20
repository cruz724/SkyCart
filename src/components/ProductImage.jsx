import React from "react";

const ProductImage = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl border p-12 flex justify-center items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-[420px] object-contain hover:scale-105 duration-300"
      />
    </div>
  );
};

export default ProductImage;
