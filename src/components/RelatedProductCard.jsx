import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const RelatedProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { cartProducts, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(MyStore);

  const cartItem = cartProducts.find((item) => item.id === product.id);

  return (
    <div className="border rounded-2xl p-5 hover:shadow-lg transition bg-white">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <div className="flex justify-center h-40">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

        <span className="text-xs bg-lime-100 text-lime-700 px-3 py-1 rounded-full mt-4 inline-block capitalize">
          {product.category}
        </span>

        <h2 className="font-semibold mt-4 line-clamp-2 min-h-[52px]">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 mt-2">
          ⭐<span>{product.rating.rate}</span>
          <span className="text-gray-500">({product.rating.count})</span>
        </div>

        <h3 className="text-2xl font-bold mt-3">${product.price}</h3>
      </div>

      <div className="mt-5">
        {!cartItem ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-lime-500 hover:text-black transition"
          >
            Add
          </button>
        ) : (
          <div className="flex justify-between items-center bg-lime-400 rounded-xl py-3 px-5">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="text-xl font-bold"
            >
              -
            </button>

            <span className="font-semibold">{cartItem.quantity}</span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="text-xl font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProductCard;
