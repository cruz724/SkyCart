import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const [isLogin, setIsLogin] = useState(!!currentUser);

  // Fetch Products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // Save Users

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save Current User

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setIsLogin(true);
    } else {
      localStorage.removeItem("currentUser");
      setIsLogin(false);
      setCartProducts([]);
    }
  }, [currentUser]);

  // Load Cart of Logged-in User

  useEffect(() => {
    if (!currentUser) return;

    const cart =
      JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || [];

    setCartProducts(cart);
  }, [currentUser]);

  // Save Cart

  useEffect(() => {
    if (!currentUser) return;

    localStorage.setItem(
      `cart_${currentUser.id}`,
      JSON.stringify(cartProducts),
    );
  }, [cartProducts, currentUser]);

  // Cart Functions

  const addToCart = (product) => {
    setCartProducts((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
    toast.success("Added to Cart!");
  };

  const removeFromCart = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  //Home

  const cartItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  const cartValue = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const categories = [...new Set(products.map((p) => p.category))];

  const topRatedProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 6);

  return (
    <MyStore.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        isLogin,
        setIsLogin,

        products,
        setProducts,
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartValue,
        categories,
        topRatedProducts,
        newArrivals,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
