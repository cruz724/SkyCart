import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Toast = () => {
  const { toast } = useContext(MyStore);

  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 px-5 py-3 rounded-lg text-white shadow-lg transition-all duration-300
      ${
        toast.type === "success"
          ? "bg-green-600"
          : toast.type === "error"
          ? "bg-red-600"
          : toast.type === "warning"
          ? "bg-yellow-500"
          : "bg-black"
      }`}
    >
      {toast.message}
    </div>
  );
};

export default Toast;