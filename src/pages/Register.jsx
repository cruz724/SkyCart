import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useForm } from "react-hook-form";

const Register = () => {
  let { users, setIsLogin, setUsers } = useContext(MyStore);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const sumbitHandle = (data) => {
    const exists = users.find((u) => u.email === data.email);

    if (exists) {
      alert("Email already registered");
      return;
    }

    const { confirmPass, ...user } = data;

    setUsers((prev) => [...prev, user]);

    alert("Account Created");

    reset();

    setIsLogin(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-sm border">
        <h1 className="text-2xl font-semibold text-center">
          Create an Account
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(sumbitHandle)} className="space-y-4">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Name cannot exceed 30 characters",
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Only letters and spaces are allowed",
              },
            })}
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                message:
                  "Must contain uppercase, lowercase, number and special character",
              },
            })}
            type="password"
            placeholder="Password (min 6 characters)"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            {...register("confirmPass", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          {errors.confirmPass && (
            <p className="text-red-500 text-sm">{errors.confirmPass.message}</p>
          )}

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => {
              setIsLogin(true);
            }}
            className="font-medium text-black cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
