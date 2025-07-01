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
          src={`${process.env.PUBLIC_URL}/landscape.jpeg`}
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
        <h2>Ever Green Garden Projects Prides Itself On Exceptional Service</h2>
        <p>
          Explore our range of professional garden services designed for your needs.
        </p>

        <div className="services">
          <div className="service-box">
            <video
             className="service-video"
             src={`${process.env.PUBLIC_URL}/gardening.mp4`}
             autoPlay
             muted
             loop
             playsInline
            ></video>
            <div className="service-content">
              <h3>Weed Removal & Flowerbed Turning</h3>
              <p>The removal of weeds in the garden and turning of flowerbeds.</p>
            </div>
          </div>
          <div className="service-box">
                        <video
             className="service-video"
             src={`${process.env.PUBLIC_URL}/gardening.mp4`}
             autoPlay
             muted
             loop
             playsInline
            ></video>
            <div className="service-content">
              <h3>Cleaning Paved Areas</h3>
              <p>We offer blowing and cleaning of paved areas.</p>
            </div>
          </div>

          <div className="service-box">
              <video
             className="service-video"
             src={`${process.env.PUBLIC_URL}/gardening.mp4`}
             autoPlay
             muted
             loop
             playsInline
            ></video>
            <div className="service-content">
              <h3>Garden Waste Removal</h3>
              <p>We specialise in the removal of any waste that may be plaguing your garden.</p>
            </div>
          </div>

          <div className="service-box">
                        <video
             className="service-video"
             src={`${process.env.PUBLIC_URL}/gardening.mp4`}
             autoPlay
             muted
             loop
             playsInline
            ></video>
            <div className="service-content">
             <h3>Trimming Of Edges & Shrub Pruning</h3>
             <p>Thorough clean-ups of edges in your garden and the pruning of shrubs.</p>
            </div>
          </div>

          <div className="service-box">
                        <video
             className="service-video"
             src={`${process.env.PUBLIC_URL}/gardening.mp4`}
             autoPlay
             muted
             loop
             playsInline
            ></video>
            <div className="service-content">
             <h3>Mowing Lawn & Tree Felling</h3>
             <p>We provide professional lawn mowing as well as tree felling.  </p>
            </div>
          </div>

        </div>
      </header>

      {/* Description */}
      <section className="description">
        <div className="text">
          <h2>Sustainable Garden Services for Every Season</h2>
          <p>
            Ever Green Garden Projects PTY(LTD) is more than just a gardening service; it's a commitment to creating sustainable,
            vibrant outdoor spaces that thrive in every season. With a passion for nature and a dedication to excellence, we transform
            ordinary landscapes into extraordinary havens. Our team offers gardening techniques that will bring life and beauty your garden.
          </p>
        </div>
        <div className="abous-us-image">

          <img
          src={`${process.env.PUBLIC_URL}/about-us.jpg`}
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
          <div
            className="reason-box"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/image.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div style={{

              height: '100%',
              width: '100%',
            }}>
              <div className="reason-content">
               <h3>Landscaping For Anyone</h3>
               <p>Commercial, industrial, residential design and the development of areas, we provide service to anyone.</p>
              </div>
            </div>
          </div>


          <div
            className="reason-box"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/Title.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div style={{

              height: '100%',
              width: '100%',
            }}>
              <div className="reason-content">
               <h3>Experienced Professionals</h3>
               <p>Our team comprises skilled individuals.</p>
              </div>
            </div>
          </div>

          <div
            className="reason-box"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/custom.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div style={{
              height: '100%',
              width: '100%',
            }}>
              <div className="reason-content">
                <h3>Custom Solutions</h3>
                <p>We offer tailored garden services to meet your unique needs.</p>
              </div>
            </div>
          </div>

          <div
            className="reason-box"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/quality.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div style={{
              height: '100%',
              width: '100%',
            }}>
              <div className="reason-content">
              <h3>Quality Assurance</h3>
              <p>We guarantee top-notch service and customer satisfaction every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Reach out for outstanding garden service and inquiries!</p>

        <div className="contact-details">
          <div className="info">
            <p>📍 46 Langdale Road, Dinwiddie, 1401</p>
            <p>📞 Max (General Manager): +27 63 093 9397</p>
            <p>📞 Siza (General Manager): +27 79 421 0523</p>
            <p>📧 skumbuzodlamini962@gmail.com</p>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.626800682957!2d28.154684410840265!3d-26.27377307693799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951a88441d1497%3A0xc20aa2caaeb88518!2s46%20Langdale%20Rd%2C%20Dinwiddie%2C%20Germiston%2C%201401!5e0!3m2!1sen!2sza!4v1751365253342!5m2!1sen!2sza"
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
        <div className="cta-buttons">
          <a href="tel:+27630939397" className="contact-button">Contact Max</a>
          <a href="mailto:skumbuzodlamini962@gmail.com" className="contact-button">Email Us</a>
          <a href="tel:+27794210523" className="contact-button">Contact Siza</a>
        </div>
      </footer>

      {/* Dark Footer Section */}
      <footer className="dark-footer">
        <p>© 2025 EVER GREEN GARDEN PROJECTS PTY(LTD)</p>
      </footer>

    </div>
  );
}
