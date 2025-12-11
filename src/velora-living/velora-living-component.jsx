import React from "react";
import "./velora-living-style.css";

const VeloraLivingComponent = () => {
  return (
    <div className="velora-container">
      {/* Top Header Bar */}
      <div className="top-header">
        <span className="desktop-text">Desktop – 1</span>
        <button className="view-prototype-btn">View Prototype</button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🪑</span>
          <span className="logo-text">Velora Living</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Designs</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-auth">
          <a href="#" className="sign-in">Sign In</a>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="title-black">Furniture That</span>
            <br />
            <span className="title-orange">Elevates Your Space</span>
          </h1>
          <p className="hero-subtitle">Crafted for comfort. Designed for modern living.</p>
          <div className="hero-buttons">
            <button className="shop-now-btn">Shop Now</button>
            <button className="arrivals-btn">Check New Arrivals</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="blob-container">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600" alt="Modern Living Room" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Our Categories</h2>
        <p className="categories-subtitle">Start building a home you always imagined</p>
        <div className="categories-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400" alt="Dining Sets" />
            <h3>Dining Sets</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" alt="Sofa & Seating" />
            <h3>Sofa & Seating</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400" alt="Bed & Mattress" />
            <h3>Bed & Mattress</h3>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="feature-strip">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <div>
            <strong>Free Shipping</strong>
            <p>Orders over ₹200</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💰</span>
          <div>
            <strong>Money-back</strong>
            <p>30 days guarantee</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🔒</span>
          <div>
            <strong>Secure Payments</strong>
            <p>100% protected</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📞</span>
          <div>
            <strong>24/7 Support</strong>
            <p>Phone and email support</p>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="trending-section">
        <h2>Trending Products</h2>
        <p className="trending-subtitle">Trends, updated just for you</p>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" alt="Oxford Sofa" />
              <span className="new-tag">New</span>
            </div>
            <h3>Oxford Leatherette Sofa</h3>
            <p className="price">₹18,999</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400" alt="Swing Bed" />
              <span className="new-tag">New</span>
            </div>
            <h3>Breeze Wooden Swing Bed</h3>
            <p className="price">₹25,000</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🪑</span>
            <span className="logo-text">Velora Living</span>
          </div>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Velora Living. All rights reserved.</p>
          <div className="social-icons">
            <span>📘</span><span>📸</span><span>🐦</span><span>🔗</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VeloraLivingComponent;

