import React, { useState } from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { currentUser, setCurrentUser, cartItems, setIsCartOpen } = useContext(MyStore);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsMobileMenuOpen(false);
    toast.success("Logged out successfully!");
  };

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-8 py-4 border-b bg-white z-40">
      {/* Logo */}
      <h1 onClick={() => navigate("/")} className="text-2xl font-bold cursor-pointer">
        SkyMart
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-gray-600">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-black transition font-medium"
        >
          Home
        </p>
        <p
          onClick={() => navigate("/shop")}
          className="cursor-pointer hover:text-black transition font-medium"
        >
          Shop
        </p>
        <p
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-black transition font-medium"
        >
          About
        </p>
      </div>

      {/* Desktop User Actions */}
      <div className="hidden md:flex items-center gap-6">
        <p className="text-gray-700 font-medium">{currentUser?.name || "User"}</p>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center gap-2 cursor-pointer"
        >
          <span>Cart</span>
          {cartItems > 0 && (
            <span className="bg-lime-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            setCurrentUser(null);
            toast.success("Logged out successfully!");
          }}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-3">
        {/* Mobile Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative px-3 py-1.5 border rounded-lg hover:bg-gray-100 transition flex items-center gap-1.5 cursor-pointer"
        >
          <span className="text-xs font-semibold text-gray-700">Cart</span>
          {cartItems > 0 && (
            <span className="bg-lime-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {cartItems}
            </span>
          )}
        </button>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 border rounded-lg hover:bg-gray-100 transition cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 p-6 flex flex-col justify-between shadow-xl transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 border rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-gray-600 font-medium">
            <p
              onClick={() => handleNavigation("/")}
              className="cursor-pointer hover:text-black transition text-lg"
            >
              Home
            </p>
            <p
              onClick={() => handleNavigation("/shop")}
              className="cursor-pointer hover:text-black transition text-lg"
            >
              Shop
            </p>
            <p
              onClick={() => handleNavigation("/about")}
              className="cursor-pointer hover:text-black transition text-lg"
            >
              About
            </p>
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <p className="text-gray-700 font-medium text-center">
            Logged in as: <span className="font-bold text-black">{currentUser?.name || "User"}</span>
          </p>

          <button
            onClick={handleLogout}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
