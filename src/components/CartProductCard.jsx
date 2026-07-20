import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartProductCard = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(MyStore);

  return (
    <div className="flex gap-4 border rounded-xl p-4">
      <img src={product.image} className="h-24 w-24 object-contain" />

      <div className="flex-1">
        <h2 className="font-semibold line-clamp-2">{product.title}</h2>

        <p className="mt-2">${product.price}</p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="border h-8 w-8 rounded"
          >
            -
          </button>

          <p>{product.quantity}</p>

          <button
            onClick={() => increaseQuantity(product.id)}
            className="border h-8 w-8 rounded"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default CartProductCard;
