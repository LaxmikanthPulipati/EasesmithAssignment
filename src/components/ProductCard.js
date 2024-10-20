import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => navigate('/thank-you', { state: { productName: product.name } })}>
        View Product
      </button>
      <button className="btn btn-primary">Primary</button>
      <button className = 'cartbutton' onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
    </div>
  );
}

export default ProductCard;
