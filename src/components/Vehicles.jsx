const vehicles = [
{
name: "Sedan",
description: "Comfortable rides for everyday travel.",
passengers: "4 Passengers",
luggage: "2 Bags",
icon: "fa-car",
},
{
name: "Micro",
description: "Affordable and compact for city rides.",
passengers: "3 Passengers",
luggage: "2 Bags",
icon: "fa-car-side",
},
{
name: "CUV",
description: "A perfect combination of comfort and space.",
passengers: "5 Passengers",
luggage: "3 Bags",
icon: "fa-car",
},
{
name: "SUV",
description: "Spacious rides for family and long trips.",
passengers: "6 Passengers",
luggage: "4 Bags",
icon: "fa-truck",
},
{
name: "Pick Up",
description: "Reliable vehicle for goods and heavy luggage.",
passengers: "4 Passengers",
luggage: "5 Bags",
icon: "fa-truck-pickup",
},
{
name: "Coupe",
description: "Stylish and comfortable premium ride.",
passengers: "2 Passengers",
luggage: "2 Bags",
icon: "fa-car-side",
},
];

function Vehicles() {
return ( <section className="vehicles-section section" id="vehicles"> <div className="section-container">

    <div className="section-heading">
      <span className="section-label">
        <i className="fa-solid fa-car"></i>
        Our Vehicles
      </span>

      <h2>
        Choose Your <span>Perfect Ride</span>
      </h2>

      <p>
        Select from our range of comfortable, reliable and well-maintained
        vehicles for your journey.
      </p>
    </div>

    <div className="vehicle-grid">
      {vehicles.map((vehicle) => (
        <div className="vehicle-card" key={vehicle.name}>

          <div className="vehicle-image">
            <div className="vehicle-icon">
              <i className={`fa-solid ${vehicle.icon}`}></i>
            </div>

            <span className="vehicle-tag">
              Available
            </span>
          </div>

          <div className="vehicle-content">
            <h3>{vehicle.name}</h3>

            <p>{vehicle.description}</p>

            <div className="vehicle-info">
              <span>
                <i className="fa-solid fa-user-group"></i>
                {vehicle.passengers}
              </span>

              <span>
                <i className="fa-solid fa-suitcase"></i>
                {vehicle.luggage}
              </span>
            </div>

            <button
              type="button"
              className="vehicle-btn"
              onClick={() =>
                alert(`${vehicle.name} selected for your ride.`)
              }
            >
              Select Vehicle
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
);
}

export default Vehicles;
