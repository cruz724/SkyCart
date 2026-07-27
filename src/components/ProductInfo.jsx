import React, { useContext } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductInfo = ({ product }) => {
  const { cartProducts, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(MyStore);

  const cartItem = cartProducts.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col">
      {/* Category */}

      <span className="w-fit px-4 py-2 rounded-full bg-lime-100 text-lime-700 text-sm font-medium">
        {product.category}
      </span>

      {/* Title */}

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight">{product.title}</h1>

      {/* Rating */}

      <div className="flex items-center gap-2 mt-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              fill={
                star <= Math.round(product.rating.rate) ? "#FACC15" : "none"
              }
              color="#FACC15"
            />
          ))}
        </div>

        <span className="font-semibold">{product.rating.rate}</span>

        <span className="text-gray-500">({product.rating.count} reviews)</span>
      </div>

      <hr className="my-8" />

      {/* Price */}

      <h2 className="text-4xl sm:text-5xl font-bold text-lime-500">${product.price}</h2>

      <hr className="my-8" />

      {/* Description */}

      <p className="text-gray-600 leading-8 text-sm sm:text-base">{product.description}</p>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">
        {!cartItem ? (
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-lime-400 hover:bg-lime-500 text-black rounded-xl py-4 font-semibold flex justify-center items-center gap-2 transition cursor-pointer"
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>
        ) : (
          <div className="flex-1 flex items-center justify-between bg-lime-400 rounded-xl px-6 py-3">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="text-2xl font-bold cursor-pointer px-2"
            >
              -
            </button>

            <span className="font-semibold text-xl">{cartItem.quantity}</span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="text-2xl font-bold cursor-pointer px-2"
            >
              +
            </button>
          </div>
        )}

        <button className="border rounded-xl px-5 hover:bg-gray-100 transition cursor-pointer">
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
