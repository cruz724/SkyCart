import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Login = () => {
  let { setIsLogin, users, setCurrentUser } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitForm = (data) => {
    const user = users.find((u) => {
      return u.email === data.email && u.password === data.password;
    });

    if (!user) {
      toast.error("Invalid Email or Password");
      return;
    }

    setCurrentUser(user);
    toast.success("Login Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-sm border">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => {
              setIsLogin(false);
            }}
            className="text-black font-medium cursor-pointer hover:underline"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
