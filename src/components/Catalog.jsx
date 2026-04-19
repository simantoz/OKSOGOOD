import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PRODUCTS } from '../data';
import ProductCard from './ProductCard';

const Catalog = ({ onQuickView, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="catalog-section section-padding">
      <div className="container">
        <div className="catalog-header">
          <h2 className="section-title">Menu Pilihan Kami</h2>
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="product-grid"
          layout
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={onQuickView}
                onAddToCart={(p) => onAddToCart(p, 1, p.variants?.[0] || '')}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .catalog-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
          text-align: center;
        }
        .section-title {
          font-size: 36px;
          margin-bottom: 30px;
          color: var(--dark);
        }
        .filter-tabs {
          display: flex;
          gap: 12px;
          padding: 8px;
          background: white;
          border-radius: 40px;
          box-shadow: var(--shadow-sm);
          overflow-x: auto;
          max-width: 100%;
          scrollbar-width: none;
        }
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        .filter-tab {
          padding: 10px 24px;
          border-radius: 30px;
          font-weight: 600;
          color: var(--gray);
          background: transparent;
          white-space: nowrap;
          transition: var(--transition);
        }
        .filter-tab.active {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 10px rgba(188, 6, 6, 0.2);
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }
        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
};

export default Catalog;
