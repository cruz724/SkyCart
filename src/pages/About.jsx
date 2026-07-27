import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

const team = [
  { initial: "A", name: "Aryan Shah", role: "Founder & CEO" },
  { initial: "P", name: "Priya Mehta", role: "Head of Product" },
  { initial: "R", name: "Rohan Verma", role: "Lead Engineer" },
  { initial: "S", name: "Sneha Kapoor", role: "Design Director" },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <section className="border rounded-3xl p-12 bg-black text-white text-center">
        <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400">
          <Zap size={26} className="text-black" fill="black" />
        </span>
        <h1 className="text-4xl font-bold sm:text-5xl">
          About Sky<span className="text-lime-400">Mart</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-400 text-lg">
          SkyMart is a next-generation e-commerce platform built to make
          online shopping fast, fair, and enjoyable — for everyone.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="border rounded-2xl p-6 bg-white hover:shadow-lg duration-300 text-center"
          >
            <Icon size={24} className="mx-auto mb-3 text-lime-500" />
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="mt-1 text-sm text-gray-500 font-medium">{label}</div>
          </div>
        ))}
      </section>
      <section className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm hover:shadow-md transition">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          SkyMart started in 2022 as a small side project — two engineers
          tired of bloated, slow e-commerce experiences. We asked ourselves:
          what if shopping online was actually{" "}
          <em className="text-gray-900 font-semibold not-italic">enjoyable</em>?
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don't require a second mortgage.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          We're still the same team at heart: obsessed with speed,
          transparency, and making you feel good about every purchase you make
          here.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">What We Stand For</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition duration-300"
            >
              <h3 className="mb-2 font-bold text-lime-600 text-lg">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {team.map(({ initial, name, role }) => (
            <div key={name} className="text-center border border-gray-200 bg-white p-6 rounded-2xl hover:shadow-md transition">
              <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-900 text-lg font-semibold">
                {initial}
              </span>
              <div className="font-bold text-gray-900">{name}</div>
              <div className="text-sm text-gray-500">{role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 rounded-3xl border border-gray-200 bg-gray-50 py-16 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900">Ready to shop?</h2>
        <p className="mt-2 text-gray-600">
          Explore thousands of products at unbeatable prices.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 inline-block rounded-xl bg-lime-400 px-8 py-3 text-sm font-semibold text-black hover:scale-105 duration-300 cursor-pointer"
        >
          Browse Products →
        </button>
      </section>

      <Footer />
    </div>
  );
}
