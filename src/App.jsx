import React, { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { MyStore } from "./context/MyContext";
import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";
import Cart from "./components/Cart";
import Toast from "./components/Toast";

const App = () => {
  const { currentUser, isLogin, setCurrentUser } = useContext(MyStore);
  if (currentUser) {
    return (
      <div>
        <Navbar />
        <Cart />
        <Toast />
        <Approutes />
      </div>
    );
  }

  return isLogin ? <Login /> : <Register />;
};

export default App;
