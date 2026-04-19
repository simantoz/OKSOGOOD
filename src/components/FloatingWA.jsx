import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ADMIN_PHONE } from '../data';

const FloatingWA = () => {
  return (
    <a
      href={`https://wa.me/${ADMIN_PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Chat with Admin"
    >
      <MessageCircle size={32} />
      <span className="tooltip">Tanya Admin</span>

      <style dangerouslySetInnerHTML={{
        __html: `
        .floating-wa {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 65px;
          height: 65px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .floating-wa:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 15px 30px rgba(37, 211, 102, 0.5);
        }
        .tooltip {
          position: absolute;
          right: 80px;
          background: white;
          color: var(--dark);
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          box-shadow: var(--shadow-md);
          opacity: 0;
          pointer-events: none;
          transition: 0.3s;
          white-space: nowrap;
        }
        .floating-wa:hover .tooltip {
          opacity: 1;
          right: 75px;
        }
      `}} />
    </a>
  );
};

export default FloatingWA;
