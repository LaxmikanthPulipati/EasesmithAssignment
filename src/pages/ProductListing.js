import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import AddToCartModal from '../components/AddToCartModal';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  // Add more mock products
  { id: 3, name: 'Product 3', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 4, name: 'Product 4', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  // Add more mock products
  { id: 5, name: 'Product 5', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 6, name: 'Product 6', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  // Add more mock products
];

function ProductListing() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="product-grid">
        {mockProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination />
      {isModalOpen && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductListing;