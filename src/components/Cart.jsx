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
        className={`fixed inset-0 bg-black/40 transition ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed right-0 top-0 h-screen w-[40%] bg-white shadow-xl transition-transform duration-300 z-50

${isCartOpen ? "translate-x-0" : "translate-x-full"}

`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>

          <button onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        <div className="h-[70vh] overflow-y-auto p-5 space-y-5">
          {cartProducts.length === 0 ? (
            <div className="text-center mt-20">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartProducts.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full border-t p-6 bg-white">
          <div className="flex justify-between text-xl font-semibold">
            <p>Total</p>

            <p>${total.toFixed(2)}</p>
          </div>

          <button className="mt-5 w-full bg-black text-white py-3 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
