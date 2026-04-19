import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import FloatingWA from './components/FloatingWA';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('oksoogood_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('oksoogood_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = '') => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.variant === variant) 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, variant }];
    });
    
    showToast(`✅ ${product.name} ditambahkan!`);
  };

  const updateQuantity = (id, variant, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.variant === variant) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id, variant) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <Catalog 
          onQuickView={handleQuickView} 
          onAddToCart={addToCart} 
        />
        
        <section className="about-mini section-padding">
          <div className="container text-center">
            <h2 className="mb-4">Kenapa OkSoGood?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h4>Bahan Segar</h4>
                <p>Kualitas bahan premium yang diolah setiap hari.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h4>Pesan Cepat</h4>
                <p>Sistem checkout WA yang praktis dan responsif.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h4>Harga Pas</h4>
                <p>Porsi kenyang dengan harga yang ramah di kantong.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>OkSoGood</h3>
              <p>Tugas Kuliah Kewirausahaan</p>
            </div>
            <div className="footer-links">
              <p>© 2024 OkSoGood Team. Dibuat dengan ❤️</p>
            </div>
          </div>
        </div>
      </footer>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <FloatingWA />

      <AnimatePresence>
        {toast && (
          <motion.div 
            className="toast-notify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 40px; }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
        }
        .feature-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
        }
        .feature-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .toast-notify {
          position: fixed;
          bottom: 110px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--dark);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          z-index: 4000;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .footer {
          padding: 60px 0;
          background: var(--primary);
          color: white;
          margin-top: 80px;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        .footer-brand h3 {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .footer-brand p {
          opacity: 0.8;
          font-size: 14px;
        }
      `}} />
    </div>
  );
}

export default App;
