import { useState } from "react";

function BookingForm() {
const [tripType, setTripType] = useState("one-way");

const [formData, setFormData] = useState({
pickup: "",
drop: "",
pickupDate: "",
pickupTime: "",
returnDate: "",
returnTime: "",
passengers: "1",
});

const [message, setMessage] = useState("");

const today = new Date().toISOString().split("T")[0];

const handleChange = (event) => {
const { name, value } = event.target;

setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setMessage("");

};

const handleTripChange = (type) => {
setTripType(type);
setMessage("");
};

const handleSubmit = (event) => {
event.preventDefault();


if (
  !formData.pickup ||
  !formData.drop ||
  !formData.pickupDate ||
  !formData.pickupTime
) {
  setMessage("Please fill in all required fields.");
  return;
}

if (
  tripType === "round-trip" &&
  (!formData.returnDate || !formData.returnTime)
) {
  setMessage("Please select your return date and time.");
  return;
}

setMessage(
  `Booking request submitted for ${formData.pickup} to ${formData.drop}.`
);


};

return ( <div className="booking-card"> <div className="booking-header"> <h2>Book Your Ride</h2> <p>Enter your trip details</p> </div>

  <div className="trip-options">
    <button
      type="button"
      className={`trip-option ${
        tripType === "one-way" ? "active" : ""
      }`}
      onClick={() => handleTripChange("one-way")}
    >
      <i className="fa-solid fa-arrow-right"></i>
      One Way
    </button>

    <button
      type="button"
      className={`trip-option ${
        tripType === "round-trip" ? "active" : ""
      }`}
      onClick={() => handleTripChange("round-trip")}
    >
      <i className="fa-solid fa-repeat"></i>
      Round Trip
    </button>
  </div>

  <form onSubmit={handleSubmit}>
    
    <div className="form-group">
      <label htmlFor="pickup">
        <i className="fa-solid fa-location-dot"></i>
        Pickup Location
      </label>

      <input
        id="pickup"
        type="text"
        name="pickup"
        placeholder="Enter pickup location"
        value={formData.pickup}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="drop">
        <i className="fa-solid fa-location-dot"></i>
        Drop Location
      </label>

      <input
        id="drop"
        type="text"
        name="drop"
        placeholder="Enter drop location"
        value={formData.drop}
        onChange={handleChange}
      />
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="pickupDate">
          <i className="fa-regular fa-calendar"></i>
          Pickup Date
        </label>

        <input
          id="pickupDate"
          type="date"
          name="pickupDate"
          min={today}
          value={formData.pickupDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="pickupTime">
          <i className="fa-regular fa-clock"></i>
          Pickup Time
        </label>

        <input
          id="pickupTime"
          type="time"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
        />
      </div>
    </div>

    {tripType === "round-trip" && (
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="returnDate">
            <i className="fa-regular fa-calendar"></i>
            Return Date
          </label>

          <input
            id="returnDate"
            type="date"
            name="returnDate"
            min={formData.pickupDate || today}
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnTime">
            <i className="fa-regular fa-clock"></i>
            Return Time
          </label>

          <input
            id="returnTime"
            type="time"
            name="returnTime"
            value={formData.returnTime}
            onChange={handleChange}
          />
        </div>
      </div>
    )}

    <div className="form-group">
      <label htmlFor="passengers">
        <i className="fa-solid fa-users"></i>
        Passengers
      </label>

      <select
        id="passengers"
        name="passengers"
        value={formData.passengers}
        onChange={handleChange}
      >
        <option value="1">1 Passenger</option>
        <option value="2">2 Passengers</option>
        <option value="3">3 Passengers</option>
        <option value="4">4 Passengers</option>
        <option value="5">5 Passengers</option>
        <option value="6">6 Passengers</option>
      </select>
    </div>
    {message && (
      <div className="booking-message">
        <i className="fa-solid fa-circle-info"></i>
        {message}
      </div>
    )}

    <button className="book-btn" type="submit">
      <span>Book Your Cab</span>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  </form>

  <div className="booking-note">
    <i className="fa-solid fa-shield-halved"></i>
    Your booking information is secure with us.
  </div>
</div>
);
}

export default BookingForm;
