import { useState } from "react";

const faqData = [
{
question: "How can I book a cab?",
answer:
"Enter your pickup and drop locations, choose your date and time, select the required vehicle and click on the Book Your Cab button.",
},
{
question: "Can I book a cab in advance?",
answer:
"Yes. You can select your preferred pickup date and time while making your booking.",
},
{
question: "Can I cancel my booking?",
answer:
"Yes. Booking cancellation can be requested according to the applicable cancellation policy.",
},
{
question: "Are your drivers verified?",
answer:
"We aim to provide rides through professional and verified drivers for a safe and comfortable travel experience.",
},
{
question: "What types of vehicles are available?",
answer:
"We offer different vehicle options including Sedan, Micro, CUV, SUV, Pick Up and Coupe.",
},
{
question: "Is customer support available?",
answer:
"Yes. Our support team is available to help with booking-related questions and ride assistance.",
},
];

function FAQ() {
const [activeIndex, setActiveIndex] = useState(0);

const toggleFAQ = (index) => {
setActiveIndex(activeIndex === index ? -1 : index);
};

return ( <section className="faq-section section" id="faq"> <div className="section-container">
    
    <div className="section-heading">
      <span className="section-label">
        <i className="fa-solid fa-circle-question"></i>
        Frequently Asked Questions
      </span>

      <h2>
        Got Questions? <span>We Have Answers</span>
      </h2>

      <p>
        Find answers to some of the most common questions about our cab
        booking service.
      </p>
    </div>

    <div className="faq-list">
      {faqData.map((faq, index) => (
        <div
          className={`faq-item ${
            activeIndex === index ? "active" : ""
          }`}
          key={faq.question}
        >
          <button
            type="button"
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
          >
            <span>
              <span className="faq-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {faq.question}
            </span>

            <i
              className={`fa-solid ${
                activeIndex === index
                  ? "fa-minus"
                  : "fa-plus"
              }`}
            ></i>
          </button>

          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
}

export default FAQ;
