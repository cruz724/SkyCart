import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ product }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
      <Link to="/" className="hover:text-lime-500 transition">
        Home
      </Link>

      <span>/</span>

      <Link to="/shop" className="hover:text-lime-500 transition">
        Products
      </Link>

      <span>/</span>

      <span className="capitalize">{product.category}</span>

      <span>/</span>

      <span className="text-black font-medium max-w-[120px] sm:max-w-[250px] md:max-w-none inline-block truncate" title={product.title}>
        {product.title}
      </span>
    </div>
  );
};

export default Breadcrumb;
