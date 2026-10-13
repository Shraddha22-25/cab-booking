import BookingForm from "./BookingForm";

function Hero() {
return ( <section className="hero" id="home"> <div className="hero-overlay"></div>

  <div className="hero-content">
    <div className="hero-text">
      <span className="hero-badge">
        <i className="fa-solid fa-star"></i>
        Safe &amp; Reliable Cab Service
      </span>

      <h1>
        Book Your
        <span> Online Cab</span>
      </h1>

      <p>
        Comfortable rides, professional drivers and reliable service
        whenever you need it.
      </p>

      <div className="hero-points">
        <div>
          <i className="fa-solid fa-circle-check"></i>
          Easy Booking
        </div>

        <div>
          <i className="fa-solid fa-circle-check"></i>
          Professional Drivers
        </div>

        <div>
          <i className="fa-solid fa-circle-check"></i>
          24/7 Support
        </div>
      </div>
    </div>

    <BookingForm />
  </div>
</section>

);
}

export default Hero;
