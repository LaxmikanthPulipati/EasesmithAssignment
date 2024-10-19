import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import AddToCartModal from '../components/AddToCartModal';

const mockProducts = [
  { id: 2, name: 'Product 1', price: 100, image: 'https://www.istockphoto.com/photo/hand-protects-seedlings-that-are-growing-environment-earth-day-in-the-hands-of-trees-gm1135640908-302188967' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://www.istockphoto.com/photo/hand-protects-seedlings-that-are-growing-environment-earth-day-in-the-hands-of-trees-gm1135640908-302188967' },
  // Add more mock products
];

function ProductListPage() {
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

export default ProductListPage;
