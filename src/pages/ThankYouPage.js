import React from 'react';
import { useLocation } from 'react-router-dom';

function ThankYouPage() {
  const location = useLocation();
  const productName = location.state?.productName || "the product";

  return (
    <div>
      <h1>Thank You for Your Interest in {productName}!</h1>
    </div>
  );
}

export default ThankYouPage;
