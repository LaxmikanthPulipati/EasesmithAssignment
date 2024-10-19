import React from 'react';

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search products..." />
      <div className="icons">
        <span>Profile</span>
        <span>Cart</span>
      </div>
    </header>
  );
}

export default Header;
