
function AppDownload() {
  const handleDownload = (store) => {
    alert(`${store} app download link will be available soon!`);
  };

  return (
    <section className="app-section">
  <div className="app-content">
    <h2>
      Download our app and access <span>exclusive</span> features
    </h2>

    <div className="app-features">
      <div className="app-feature">
        <i className="fa-solid fa-headset"></i>
        <span>24/7 Customer Support</span>
      </div>

      <div className="app-feature">
        <i className="fa-solid fa-shield-halved"></i>
        <span>Ride Safely</span>
      </div>

      <div className="app-feature">
        <i className="fa-solid fa-star"></i>
        <span>Top Rated Driver - Partner</span>
      </div>
    </div>

    <div className="app-buttons">
      <a href="#" className="app-store-btn">
        <i className="fa-brands fa-apple"></i>

        <div>
          <small>Download on the</small>
          <strong>App Store</strong>
        </div>
      </a>

      <a href="#" className="google-play-btn">
        <i className="fa-brands fa-google-play"></i>

        <div>
          <small>GET IT ON</small>
          <strong>Google Play</strong>
        </div>
      </a>
    </div>
  </div>

  <div className="app-visual">
   <img
  src="https://stackbros.in/bookinga/landing/assets/images/element/01.png"
  className="mobile-phone-image"
  alt="Mobile App"
/>
  </div>
</section>
  );
}

export default AppDownload;
