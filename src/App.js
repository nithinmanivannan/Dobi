import React from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Dobi</div>
          <ul className="nav-links">
          <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h1>Laundry Pickup and Delivery</h1>
          <p>Convenient, fast, and reliable service at your doorstep.</p>
          <Link to="services" smooth={true} duration={500} className="cta-btn">
            Get Started
          </Link>
        </div>
        <div className="image-frame">
           <img src="/images/laundry.jpg" alt="Laundry" />
        </div>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service">
            <img src="/images/washing-machine.svg" alt="Washing Machine" />
            <h3>Wash & Fold</h3>
            <p>Efficient washing and folding of your laundry.</p>
          </div>
          <div className="service">
            <img src="/images/iron.svg" alt="Iron" />
            <h3>Ironing</h3>
            <p>Professional ironing service for wrinkle-free clothes.</p>
          </div>
          <div className="service">
            <img src="/images/dry-clean.svg" alt="Dry Clean" />
            <h3>Dry Cleaning</h3>
            <p>Specialized dry cleaning for delicate garments.</p>
          </div>
        </div>
      </section>

      <section id="pricing">
        <h2>Our Pricing</h2>
        <div className="pricing-grid">
          <div className="plan">
            <h3>Basic</h3>
            <p>Starting at ₹300</p>
            <ul>
              <li>Wash & Fold</li>
              <li>Pickup & Delivery</li>
            </ul>
            <a href="#contact" className="cta-btn">Sign Up</a>
          </div>
          <div className="plan">
            <h3>Standard</h3>
            <p>Starting at ₹700</p>
            <ul>
              <li>Wash & Fold</li>
              <li>Ironing</li>
              <li>Pickup & Delivery</li>
            </ul>
            <a href="#contact" className="cta-btn">Sign Up</a>
          </div>
          <div className="plan">
            <h3>Premium</h3>
            <p>Starting at ₹1300</p>
            <ul>
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Ironing</li>
              <li>Pickup & Delivery</li>
            </ul>
            <a href="#contact" className="cta-btn">Sign Up</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Get in touch with us.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 Dobi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
