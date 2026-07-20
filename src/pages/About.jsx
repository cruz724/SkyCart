import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import React from "react";

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
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="py-24 text-center">
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400">
            <Zap size={26} className="text-black" fill="black" />
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl">
            About Sky<span className="text-lime-400">Mart</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 pb-20 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 py-8 text-center"
            >
              <Icon size={20} className="mx-auto mb-3 text-lime-400" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-white/40">{label}</div>
            </div>
          ))}
        </section>

        {/* Story */}
        <section className="mb-20 rounded-2xl border border-white/10 p-8 sm:p-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="text-white/50 leading-relaxed">
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually{" "}
            <em className="text-white/70 not-italic">enjoyable</em>?
          </p>
          <p className="mt-4 text-white/50 leading-relaxed">
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>
          <p className="mt-4 text-white/50 leading-relaxed">
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you make
            here.
          </p>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold">What We Stand For</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 p-6"
              >
                <h3 className="mb-2 font-semibold text-lime-400">{title}</h3>
                <p className="text-sm text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold">Meet the Team</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {team.map(({ initial, name, role }) => (
              <div key={name} className="text-center">
                <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-lg font-semibold">
                  {initial}
                </span>
                <div className="font-medium">{name}</div>
                <div className="text-sm text-white/40">{role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24 rounded-2xl border border-white/10 py-16 text-center">
          <h2 className="text-2xl font-semibold">Ready to shop?</h2>
          <p className="mt-2 text-white/50">
            Explore thousands of products at unbeatable prices.
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-300"
          >
            Browse Products
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/30">
        © 2025 SkyMart • Built with React
      </footer>
    </div>
  );
}
