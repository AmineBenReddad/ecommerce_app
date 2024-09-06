import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading, error } = useContext(ProductContext);

  //find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error fetching product: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.category.image}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="md:ml-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-green-600">{product.price}$</p>
          <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
