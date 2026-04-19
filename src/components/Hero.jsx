import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero.png';
import { ADMIN_PHONE } from '../data';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Entrepreneurship Project</span>
          <h1 className="hero-title">Nikmati Kelezatan <span className="text-secondary">OkSoGood</span> Sekarang!</h1>
          <p className="hero-subtitle">
            Pilihan Bento, Mix Platter, dan Mojito premium untuk menemani hari-harimu. 
            Cita rasa autentik dengan harga mahasiswa.
          </p>
          <div className="hero-btns">
            <a href="#catalog" className="btn btn-primary">Lihat Menu</a>
            <a href={`https://wa.me/${ADMIN_PHONE}`} target="_blank" className="btn btn-outline">Tanya Admin</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={heroImg} alt="OkSoGood Hero" className="hero-image" />
          <div className="hero-blob"></div>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          padding: 60px 0 100px;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 20px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-title {
          font-size: clamp(40px, 8vw, 64px);
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--dark);
        }
        .text-secondary {
          color: var(--secondary);
        }
        .hero-subtitle {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 32px;
          max-width: 500px;
        }
        @media (max-width: 768px) {
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .hero-btns {
          display: flex;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .hero-btns {
            justify-content: center;
          }
        }
        .btn {
          padding: 14px 28px;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 15px rgba(188, 6, 6, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(188, 6, 6, 0.4);
        }
        .btn-outline {
          background: white;
          color: var(--dark);
          border: 2px solid var(--peach);
        }
        .btn-outline:hover {
          background: var(--peach);
          color: var(--primary);
        }
        .hero-image-container {
          position: relative;
        }
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
          z-index: 2;
          position: relative;
        }
        .hero-blob {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 80%;
          height: 80%;
          background: linear-gradient(135deg, var(--peach), var(--bg-light));
          border-radius: 50%;
          filter: blur(40px);
          z-index: 1;
        }
      `}} />
    </section>
  );
};

export default Hero;
