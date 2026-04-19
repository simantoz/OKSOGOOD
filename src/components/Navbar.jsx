import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">Ok<span className="text-primary">So</span>Good</span>
        </div>
        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartClick}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding: 15px 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -1px;
        }
        .text-primary {
          color: var(--primary);
        }
        .cart-btn {
          background: none;
          position: relative;
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
        }
        .cart-btn:hover {
          background: var(--light-gray);
          color: var(--primary);
        }
        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--primary);
          color: white;
          font-size: 10px;
          font-weight: bold;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }
      `}} />
    </nav>
  );
};

export default Navbar;
