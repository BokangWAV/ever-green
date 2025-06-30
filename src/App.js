import React from "react";
import "./App.css";

export default function GardeningAdApp() {
  return (
    <div className="container">
      {/* Top-right Contact Button */}
      <div className="top-right-button">
        <a href="#contact" className="contact-top-button">Contact Us</a>
      </div>
      {/* Company Name Top Section with Image */}
      <div className="hero-section">
        <img
          src="/premium_photo-1673141390230-8b4a3c3152b1.jpeg"
          alt="Gardening background"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Ever Green Garden Projects</h1>
          <p>Transforming outdoor spaces with care and creativity</p>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <h2>Our Exceptional Services</h2>
        <p>
          Explore our range of professional garden services designed for your needs.
        </p>

        <div className="services">
          <div className="service-box">
            <h3>Lawn Care Solutions</h3>
            <p>Professional maintenance and health of your lawn year-round.</p>
          </div>
          <div className="service-box">
            <h3>Garden Design Services</h3>
            <p>Bespoke designs tailored to enhance your outdoor space.</p>
          </div>
          <div className="service-box">
            <h3>Tree and Shrub Care</h3>
            <p>Expert pruning and care for your trees and shrubs.</p>
          </div>
          <div className="service-box">
            <h3>Seasonal Clean-ups</h3>
            <p>Thorough clean-ups to prepare your garden for each season.</p>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="description">
        <div className="text">
          <h2>Sustainable Garden Services for Every Season</h2>
          <p>
            Ever Green Garden Projects PTY(LTD) is more than just a garden service business; it's a commitment to creating sustainable,
            vibrant outdoor spaces that thrive in every season. With a passion for nature and a dedication to excellence, we transform
            ordinary landscapes into extraordinary havens. Our team of experienced professionals combines innovation with traditional
            gardening techniques to bring life and beauty to gardens.
          </p>
        </div>
        <div className="abous-us-image">

          <img
          src="/premium_photo-1673141390230-8b4a3c3152b1.jpeg"
          alt="Gardening background"
          className="hero-image"
          />

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Ever Green Garden Projects</h2>
        <p>Discover the benefits of choosing us for your gardening needs.</p>

        <div className="reasons">
          <div className="reason-box">
            <h3>Experienced Professionals</h3>
            <p>Our team comprises skilled individuals.</p>
          </div>
          <div className="reason-box">
            <h3>Custom Solutions</h3>
            <p>We offer tailored garden services to meet your unique needs.</p>
          </div>
          <div className="reason-box">
            <h3>Quality Assurance</h3>
            <p>We guarantee top-notch service and customer satisfaction every time.</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Reach out for outstanding garden service and inquiries!</p>

        <div className="contact-details">
          <div className="info">
            <p>📍 1st Example st., Example City, Example Country</p>
            <p>📞 +1 234 567 8910</p>
            <p>📧 bokangmolepo03@gmail.com</p>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019982261637!2d-122.40365588468126!3d37.79267897975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6e6cd0d%3A0x9f9b6fc9f6c15a58!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1610000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      {/* Updated Call-to-Action Footer Section */}
      <footer className="cta-footer">
        <h2>Transform Your Garden Today</h2>
        <p>Let’s bring your outdoor space to life with our expert gardening solutions.</p>
        <button className="contact-button">Contact Us</button>
      </footer>

      {/* Dark Footer Section */}
      <footer className="dark-footer">
        <p>© 2025 EVER GREEN GARDEN PROJECTS PTY(LTD)</p>
      </footer>

    </div>
  );
}
