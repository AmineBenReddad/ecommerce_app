import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.category.image}
          alt={product.title}
          className="w-full h-70 md:h-30 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-500 mb-2">{product.price}$</p>
      </Link>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
