import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="text-lg font-bold">
          eCommerce
        </a>
        <div>
          <a href="/cart" className="mr-4">
            Cart
          </a>
          <a href="/profile">Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
