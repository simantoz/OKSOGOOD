import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Clock } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(product?.variants?.[0] || '');

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, variant);
    onClose();
    setQuantity(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root">
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button className="modal-close" onClick={onClose}><X /></button>
            
            <div className="modal-content">
              <div className="modal-image-side">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="modal-info-side">
                <div className="modal-header">
                  <span className="modal-cat">{product.category}</span>
                  <h2 className="modal-title">{product.name}</h2>
                  <div className="po-tag">
                    <Clock size={14} />
                    <span>{product.po_tag}</span>
                  </div>
                </div>
                
                <p className="modal-desc">{product.description}</p>
                
                <div className="modal-options">
                  {product.variants && product.variants.length > 1 && (
                    <div className="option-group">
                      <label>Pilih Varian:</label>
                      <div className="variant-chips">
                        {product.variants.map(v => (
                          <button 
                            key={v}
                            className={`variant-chip ${variant === v ? 'active' : ''}`}
                            onClick={() => setVariant(v)}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="option-group">
                    <label>Jumlah Pesanan:</label>
                    <div className="qty-selector">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={18}/></button>
                      <span>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}><Plus size={18}/></button>
                    </div>
                  </div>
                </div>
                
                <div className="modal-footer">
                  <div className="modal-total">
                    <span>Total Harga</span>
                    <h3>Rp {(product.price * quantity).toLocaleString('id-ID')}</h3>
                  </div>
                  <button className="btn btn-primary btn-full" onClick={handleAdd}>
                    <ShoppingBag size={20} />
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .modal-root {
              position: fixed;
              inset: 0;
              z-index: 2000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            .modal-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0,0,0,0.6);
              backdrop-filter: blur(5px);
            }
            .modal-container {
              position: relative;
              background: white;
              width: 100%;
              max-width: 900px;
              border-radius: 30px;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
              max-height: 90vh;
              overflow-y: auto;
            }
            .modal-close {
              position: absolute;
              top: 20px;
              right: 20px;
              z-index: 10;
              background: white;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: var(--shadow-sm);
            }
            .modal-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 768px) {
              .modal-content {
                grid-template-columns: 1fr;
              }
            }
            .modal-image-side img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              min-height: 300px;
            }
            .modal-info-side {
              padding: 40px;
              display: flex;
              flex-direction: column;
            }
            .modal-cat {
              font-size: 14px;
              color: var(--secondary);
              font-weight: 700;
              text-transform: uppercase;
            }
            .modal-title {
              font-size: 32px;
              margin: 8px 0 16px;
              color: var(--dark);
            }
            .po-tag {
              display: flex;
              align-items: center;
              gap: 6px;
              background: var(--bg-light);
              color: var(--primary);
              padding: 6px 12px;
              border-radius: 8px;
              font-size: 13px;
              font-weight: 600;
              width: fit-content;
            }
            .modal-desc {
              color: var(--gray);
              margin: 20px 0;
            }
            .option-group {
              margin-bottom: 24px;
            }
            .option-group label {
              display: block;
              font-weight: 700;
              margin-bottom: 12px;
              font-size: 14px;
            }
            .variant-chips {
              display: flex;
              gap: 10px;
            }
            .variant-chip {
              padding: 8px 16px;
              border-radius: 10px;
              background: var(--light-gray);
              color: var(--dark);
              font-weight: 600;
              font-size: 14px;
            }
            .variant-chip.active {
              background: var(--primary);
              color: white;
            }
            .qty-selector {
              display: flex;
              align-items: center;
              gap: 20px;
              background: var(--light-gray);
              width: fit-content;
              padding: 8px;
              border-radius: 12px;
            }
            .qty-selector span {
              font-weight: 800;
              font-size: 18px;
              min-width: 30px;
              text-align: center;
            }
            .qty-selector button {
              width: 34px;
              height: 34px;
              background: white;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary);
            }
            .modal-footer {
              margin-top: auto;
              padding-top: 30px;
              border-top: 1px solid var(--light-gray);
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .modal-total {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            .modal-total span {
              color: var(--gray);
              font-size: 14px;
            }
            .modal-total h3 {
              font-size: 24px;
              color: var(--primary);
            }
            .btn-full {
              width: 100%;
              justify-content: center;
              font-size: 18px;
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
