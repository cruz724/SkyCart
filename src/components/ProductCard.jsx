import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const { cartProducts, increaseQuantity, decreaseQuantity } =
    useContext(MyStore);
  const cartItem = cartProducts.find((item) => item.id === product.id);
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
      {/* Product Image */}
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        className="h-52 flex items-center justify-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain"
        />
      </div>

      {/* Product Details */}
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        className="mt-4 space-y-2"
      >
        <p className="text-xs uppercase text-gray-500">{product.category}</p>

        <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>

        <p className="text-sm text-yellow-500">
          ⭐ {product.rating.rate}
          <span className="text-gray-500 ml-1">
            ({product.rating.count} reviews)
          </span>
        </p>
      </div>

      {/* Price & Button */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-xl font-bold">${product.price}</p>

        {!cartItem ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="px-3 py-2 hover:bg-gray-100"
            >
              -
            </button>

            <span className="px-4">{cartItem.quantity}</span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="px-3 py-2 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
