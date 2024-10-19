import React from 'react';

function AddToCartModal({ product, onClose }) {
  return (
    <div className="modal">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={onClose}>Close</button>
      <button>Confirm Add to Cart</button>
    </div>
  );
}

export default AddToCartModal;
