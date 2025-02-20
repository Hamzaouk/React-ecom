import React, { useState } from "react";
import imagePreview from "./assets/st.gif"


const ProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: null,
  });
  
  // const [imagePreview, setImagePreview] = useState("/api/placeholder/400/300");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setProduct({ ...product, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = () => {
    console.log("Update product:", product);
  };

  const handleDelete = () => {
    console.log("Delete product:", product);
  };

  return (
     <div className="container mx-auto px-6 py-12"> 
      {/* Product Form Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (€)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product Display Section - Horizontal List */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg mt-12 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Details</h2>
        <div className="flex items-center space-x-4 border border-gray-200 rounded-lg p-4">
          <img
            src={imagePreview}
            alt="Product"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.title || "Product Title"}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {product.description || "Product Description"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-600">
              {product.price ? `€${product.price}` : "Price not set"}
            </p>
            <p className="text-sm text-gray-600">Stock: {product.stock || "0"}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              title="Update product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              title="Delete product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;