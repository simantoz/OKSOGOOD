import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  return (
    <motion.div 
      className="product-card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
    >
      <div className="card-image-wrapper" onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
        <div className="card-overlay">
          <span>Lihat Detail</span>
        </div>
      </div>
      <div className="card-info">
        <span className="card-category">{product.category}</span>
        <h3 className="card-title">{product.name}</h3>
        <div className="card-footer">
          <p className="card-price">Rp {product.price.toLocaleString('id-ID')}</p>
          <button 
            className="add-to-cart-mini" 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .card-image-wrapper {
          position: relative;
          aspect-ratio: 1/1;
          overflow: hidden;
          cursor: pointer;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.1);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(188, 6, 6, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          color: white;
          font-weight: 600;
          backdrop-filter: blur(2px);
        }
        .card-image-wrapper:hover .card-overlay {
          opacity: 1;
        }
        .card-info {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-category {
          font-size: 12px;
          color: var(--secondary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 18px;
          margin-bottom: 12px;
          color: var(--dark);
          line-height: 1.3;
        }
        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-price {
          font-weight: 800;
          font-size: 20px;
          color: var(--primary);
          font-family: 'Outfit', sans-serif;
        }
        .add-to-cart-mini {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--bg-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .add-to-cart-mini:hover {
          background: var(--primary);
          color: white;
          transform: rotate(90deg);
        }
      `}} />
    </motion.div>
  );
};

export default ProductCard;
