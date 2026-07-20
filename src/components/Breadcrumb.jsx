import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ product }) => {
  return (
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <Link to="/" className="hover:text-lime-500">
        Home
      </Link>

      <span>/</span>

      <Link to="/shop" className="hover:text-lime-500">
        Products
      </Link>

      <span>/</span>

      <span className="capitalize">{product.category}</span>

      <span>/</span>

      <span className="text-black font-medium truncate">{product.title}</span>
    </div>
  );
};

export default Breadcrumb;
