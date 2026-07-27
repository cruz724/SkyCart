import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">SkyMart</h1>

        <p className="text-gray-500 mt-5 md:mt-0">
          © 2026 SkyMart • Built with React + Context API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
