import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setCurrentUser, cartProducts, setIsCartOpen } = useContext(MyStore);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold">SkyMart</h1>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-gray-600">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-black transition"
        >
          Home
        </p>
        <p
          onClick={() => navigate("/shop")}
          className="cursor-pointer hover:text-black transition"
        >
          Shop
        </p>
        <p
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-black transition"
        >
          About
        </p>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6">
        <p className="text-gray-700">Shubham</p>

        <button
          onClick={() => setIsCartOpen(true)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          Cart
        </button>

        <button
          onClick={() => {
            setCurrentUser(null);
            toast.success("Logged out successfully!");
          }}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
