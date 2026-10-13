const features = [
{
icon: "fa-calendar-check",
title: "Advance Booking",
description:
"Book your ride in advance and travel without worrying about last-minute transportation.",
},
{
icon: "fa-wallet",
title: "Economical Trip",
description:
"Enjoy comfortable rides at affordable prices with transparent and competitive fares.",
},
{
icon: "fa-shield-halved",
title: "Secure & Safer",
description:
"Your safety is our priority with verified drivers and reliable vehicles.",
},
{
icon: "fa-car-side",
title: "Vehicle Options",
description:
"Choose from multiple vehicle options according to your travel needs and group size.",
},
{
icon: "fa-headphones",
title: "Cab Entertainment",
description:
"Relax and enjoy a pleasant travel experience with comfortable in-cab facilities.",
},
{
icon: "fa-user-tie",
title: "Polite Driver",
description:
"Our professional drivers are trained to provide a friendly and respectful experience.",
},
];

function Features() {
return ( <section className="features-section section" id="features"> <div className="section-container">

    <div className="section-heading">
      <span className="section-label">
        <i className="fa-solid fa-circle-check"></i>
        Why Choose Us
      </span>

      <h2>
        Everything You Need for a <span>Better Ride</span>
      </h2>

      <p>
        We make your journey simple, comfortable and reliable from
        booking to destination.
      </p>
    </div>

    <div className="features-grid">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>

          <div className="feature-icon">
            <i className={`fa-solid ${feature.icon}`}></i>
          </div>

          <div className="feature-content">
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <span className="feature-arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

);
}

export default Features;
