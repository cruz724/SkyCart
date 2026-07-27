import React from "react";
import { useNavigate } from "react-router";

const MiniProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 hover:bg-gray-50/70 px-2 -mx-2 rounded-2xl transition cursor-pointer"
    >
      <div className="h-16 w-16 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-2 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-12 object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-950 text-sm truncate hover:text-lime-600 transition">
          {product.title}
        </h3>
        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mt-1">
          {product.category}
        </p>
      </div>

      {/* Price & Rating */}
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-gray-900">${product.price}</p>
        <p className="text-xs text-yellow-500 mt-1 font-medium">
          ⭐ {product.rating?.rate || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MiniProductCard;