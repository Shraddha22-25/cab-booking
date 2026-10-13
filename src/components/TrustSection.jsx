function TrustSection() {
const stats = [
{
icon: "fa-users",
number: "10K+",
label: "Happy Customers",
},
{
icon: "fa-car",
number: "500+",
label: "Vehicles",
},
{
icon: "fa-route",
number: "50K+",
label: "Trips Completed",
},
{
icon: "fa-star",
number: "4.9",
label: "Customer Rating",
},
];

return ( <section className="trust-section"> <div className="trust-container">

    <div className="trust-content">

      <span className="section-label">
        <i className="fa-solid fa-shield-halved"></i>
        Trusted Cab Service
      </span>

      <h2>
        Your Journey,
        <span> Our Responsibility</span>
      </h2>

      <p>
        We are committed to providing safe, comfortable and reliable
        transportation for every journey. From professional drivers to
        well-maintained vehicles, we focus on making every ride a
        pleasant experience.
      </p>

      <div className="trust-points">
        <div>
          <i className="fa-solid fa-circle-check"></i>
          Verified &amp; Professional Drivers
        </div>

        <div>
          <i className="fa-solid fa-circle-check"></i>
          Clean &amp; Comfortable Vehicles
        </div>

        <div>
          <i className="fa-solid fa-circle-check"></i>
          Reliable Customer Support
        </div>
      </div>

      <a href="#home" className="trust-btn">
        Book Your Ride
        <i className="fa-solid fa-arrow-right"></i>
      </a>

    </div>

    {/* Statistics */}
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>

          <div className="stat-icon">
            <i className={`fa-solid ${stat.icon}`}></i>
          </div>

          <strong>{stat.number}</strong>

          <span>{stat.label}</span>

        </div>
      ))}
    </div>

  </div>
</section>

);
}

export default TrustSection;
