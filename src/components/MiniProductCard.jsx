import React from "react";
import { useNavigate } from "react-router";

const MiniProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/shop")}
      className="flex items-center gap-4 border rounded-2xl p-4 hover:shadow-lg transition cursor-pointer bg-white"
    >
      <div className="h-20 w-20 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-16 object-contain"
        />
      </div>

      <div className="flex-1">
        <h2 className="font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-lg font-bold mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default MiniProductCard;