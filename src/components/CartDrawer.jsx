import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeItem }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // WhatsApp Checkout Engine
    let message = "Halo Admin OkSoGood! Saya mau ikut Pre-Order:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* ${item.variant ? `(${item.variant})` : ''}\n`;
      message += `   Jumlah: ${item.quantity} porsi\n`;
      message += `   Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });
    
    message += `*Total Pembayaran: Rp ${totalPrice.toLocaleString('id-ID')}*\n\n`;
    message += "Apakah kuota PO masih tersedia? Terima kasih!";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cart-root">
          <motion.div 
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Keranjang Saya</h2>
              <button onClick={onClose}><X /></button>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Keranjangmu masih kosong nih...</p>
                  <button className="btn btn-outline" onClick={onClose}>Mulai Belanja</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div className="cart-item" key={`${item.id}-${item.variant}`}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <div className="item-row">
                        <h4>{item.name}</h4>
                        <button className="remove-btn" onClick={() => removeItem(item.id, item.variant)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                      {item.variant && <span className="item-variant">Varian: {item.variant}</span>}
                      <div className="item-footer">
                        <p className="item-price">Rp {item.price.toLocaleString('id-ID')}</p>
                        <div className="qty-controls">
                          <button onClick={() => updateQuantity(item.id, item.variant, -1)}><Minus size={14}/></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.variant, 1)}><Plus size={14}/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Harga</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                
                <button className="checkout-btn" onClick={handleCheckout}>
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .cart-root {
              position: fixed;
              inset: 0;
              z-index: 3000;
            }
            .cart-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0,0,0,0.4);
            }
            .cart-panel {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              max-width: 450px;
              background: white;
              display: flex;
              flex-direction: column;
              box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            }
            .cart-header {
              padding: 24px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid var(--light-gray);
            }
            .cart-items {
              flex: 1;
              overflow-y: auto;
              padding: 24px;
            }
            .empty-cart {
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: var(--gray);
            }
            .cart-item {
              display: flex;
              gap: 16px;
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px dashed var(--light-gray);
            }
            .cart-item img {
              width: 80px;
              height: 80px;
              border-radius: 12px;
              object-fit: cover;
            }
            .item-details {
              flex: 1;
            }
            .item-row {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 4px;
            }
            .item-row h4 {
              font-size: 16px;
              color: var(--dark);
            }
            .remove-btn {
              background: none;
              color: #ff4d4d;
              opacity: 0.6;
            }
            .remove-btn:hover {
              opacity: 1;
            }
            .item-variant {
              font-size: 12px;
              color: var(--secondary);
              font-weight: 600;
              display: block;
              margin-bottom: 12px;
            }
            .item-footer {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .item-price {
              font-weight: 700;
              color: var(--primary);
            }
            .qty-controls {
              display: flex;
              align-items: center;
              gap: 12px;
              background: var(--light-gray);
              padding: 4px;
              border-radius: 8px;
            }
            .qty-controls button {
              width: 24px;
              height: 24px;
              background: white;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--dark);
            }
            .qty-controls span {
              font-weight: 700;
              min-width: 20px;
              text-align: center;
            }
            .cart-footer {
              padding: 24px;
              background: var(--light-gray);
              border-top: 1px solid #eee;
            }
            .summary-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 12px;
              font-size: 14px;
              color: var(--gray);
            }
            .summary-row.total {
              margin-top: 16px;
              padding-top: 16px;
              border-top: 1px solid #ddd;
              font-weight: 800;
              font-size: 18px;
              color: var(--dark);
            }
            .checkout-btn {
              width: 100%;
              margin-top: 24px;
              padding: 16px;
              background: #25D366;
              color: white;
              border-radius: 12px;
              font-weight: 700;
              font-size: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
            }
            .checkout-btn:hover {
              background: #128C7E;
              transform: translateY(-2px);
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
