import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const { cartProducts, isCartOpen, setIsCartOpen } = useContext(MyStore);

  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-[450px] bg-white shadow-xl transition-transform duration-300 z-50 flex flex-col justify-between
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div>
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="h-[calc(100vh-230px)] overflow-y-auto p-5 space-y-5">
            {cartProducts.length === 0 ? (
              <div className="text-center mt-20">
                <p className="text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              cartProducts.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>

        <div className="border-t p-6 bg-white shrink-0">
          <div className="flex justify-between text-xl font-semibold">
            <p>Total</p>

            <p>${total.toFixed(2)}</p>
          </div>

          <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer font-medium">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
