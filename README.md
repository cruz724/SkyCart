# 🛍️ SkyMart

SkyMart is a modern e-commerce web application built using React, Context API, React Router, and Tailwind CSS. The application provides a complete shopping experience with authentication, product browsing, dynamic product details, cart management, and persistent data using Local Storage.

## 🚀 Features

- User Registration & Login
- Authentication using Local Storage
- Context API for global state management
- Persistent user session
- Product listing
- Dynamic Product Details page
- Related Products
- Add to Cart
- Increase / Decrease Product Quantity
- Remove from Cart
- Cart Drawer
- Toast Notifications
- Shop by Category
- Top Rated Products
- New Arrivals
- Responsive Design
- Modern Tailwind CSS UI

## 🛠 Tech Stack

- React.js
- React Router DOM
- Context API
- Tailwind CSS
- Local Storage
- Fake Store API
- Lucide React Icons

## 📂 Project Structure

```
src/
│
├── components/
│   ├── home/
│   ├── product/
│   ├── cart/
│   └── ProductCard.jsx
│
├── context/
│   └── MyContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Cart.jsx
│
└── App.jsx
```

## 🔑 Authentication

The application uses **Local Storage** for authentication.

- Register new users
- Login with existing users
- Persistent login session
- Logout functionality

## 🛒 Cart Management

- Add products to cart
- Update quantity
- Remove products
- Cart automatically saved in Local Storage
- Individual cart for every logged-in user

## 📦 Product Features

- Dynamic routing
- Product details page
- Related products
- Category filtering
- Ratings & Reviews
- Responsive product cards

## 💾 State Management

Global state is managed using **React Context API**.

The Context stores:

- Products
- Current User
- Registered Users
- Shopping Cart
- Toast Notifications
- Cart Visibility

## 🎨 UI

- Fully Responsive
- Mobile Friendly
- Modern Card Design
- Smooth Hover Effects
- Minimal Dashboard Style

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/skymart.git

cd skymart

npm install

npm run dev
```

## 📸 Screens

- Home
- Shop
- Product Details
- Login
- Register
- Cart Drawer

## 📄 License

This project is created for learning and portfolio purposes.
