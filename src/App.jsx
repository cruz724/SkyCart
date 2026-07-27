import React, { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { MyStore } from "./context/MyContext";
import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";
import Cart from "./components/Cart";

const App = () => {
  const { currentUser, isLogin, setCurrentUser } = useContext(MyStore);
  if (currentUser) {
    return (
      <div>
        <Navbar />
        <Cart />
        <Approutes />
      </div>
    );
  }

  return isLogin ? <Login /> : <Register />;
};

export default App;
