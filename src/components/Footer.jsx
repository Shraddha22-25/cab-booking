function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="footer" id="contact"> <div className="footer-container">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        <span className="logo-icon">
          <i className="fa-solid fa-car-side"></i>
        </span>

        <span>
          Cab<span>Ride</span>
        </span>
      </a>

      <p>
        Reliable, comfortable and affordable cab rides whenever you
        need them. Your journey is our responsibility.
      </p>

      <div className="social-links">
        <a href="#facebook" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#instagram" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#twitter" aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href="#linkedin" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    {/* Company */}
    <div className="footer-column">
      <h3>Company</h3>

      <a href="#home">Home</a>
      <a href="#features">About Us</a>
      <a href="#vehicles">Vehicles</a>
      <a href="#features">Features</a>
      <a href="#faq">FAQ</a>
    </div>

    {/* Services */}
    <div className="footer-column">
      <h3>Services</h3>

      <a href="#home">City Rides</a>
      <a href="#home">Airport Transfer</a>
      <a href="#home">Outstation Trips</a>
      <a href="#home">Corporate Travel</a>
      <a href="#home">Car Rental</a>
    </div>

    {/* Support */}
    <div className="footer-column">
      <h3>Support</h3>

      <a href="#faq">Help Center</a>
      <a href="#faq">FAQs</a>
      <a href="#contact">Contact Us</a>
      <a href="#contact">Privacy Policy</a>
      <a href="#contact">Terms &amp; Conditions</a>
    </div>

    {/* Contact */}
    <div className="footer-column footer-contact">
      <h3>Contact</h3>

      <div className="contact-item">
        <i className="fa-solid fa-location-dot"></i>

        <span>
          Your City,
          <br />
          India
        </span>
      </div>

      <div className="contact-item">
        <i className="fa-solid fa-phone"></i>

        <span>+91 98765 43210</span>
      </div>

      <div className="contact-item">
        <i className="fa-solid fa-envelope"></i>

        <span>support@cabride.com</span>
      </div>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="footer-bottom-container">

      <p>
        © {currentYear} CabRide. All rights reserved.
      </p>

      <p>
        Made with <i className="fa-solid fa-heart"></i> for better rides.
      </p>

    </div>
  </div>

  {/* Back To Top */}
  <a href="#home" className="back-to-top" aria-label="Back to top">
    <i className="fa-solid fa-arrow-up"></i>
  </a>
</footer>

);
}

export default Footer;
