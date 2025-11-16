import React, { useState } from "react";
import "./Faq.css";
import Vlog from "../../assets/Images/pexels-rdne-6518738.jpg";
import Navbar from "../../components/Nav/Navbar";
import LuxuryHotelFooter from "../../components/Footer/Footer";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
const faqs: FaqItem[] = [
  {
    question: "What is EventSphere?",
    answer:
      "EventSphere is a web-based College Event Information System that provides real-time details about upcoming and past events. Students can register, organizers can manage events, and admins oversee the platform.",
  },
  {
    question: "Who can use EventSphere?",
    answer:
      "EventSphere can be used by Normal Students (visitors), Participants (registered students), Organizers (college staff), and Admins (system administrators), each with specific roles and access levels.",
  },
  {
    question: "Do I need an account to view events?",
    answer:
      "No. Normal students can view upcoming and past events, media galleries, and general pages like About Us or FAQs without creating an account.",
  },
  {
    question: "How do I register for an event?",
    answer:
      "Registered students can log in, browse events, and register through their dashboard. Event eligibility and slot availability are considered before registration.",
  },
  {
    question: "Can I cancel my event registration?",
    answer:
      "Yes. Participants can cancel their registration before the event cutoff date if cancellation is allowed by the event rules.",
  },
  {
    question: "How does attendance work?",
    answer:
      "On the day of the event, participants check in using a system-generated QR code or other validation methods scanned by the organizer to mark attendance.",
  }
//   {
//     question: "Can I get a certificate for attending an event?",
//     answer:
//       "Yes. After attending an event, participants can download e-certificates from their profile or event page. Certificate fees are handled within the platform.",
//   },
//   {
//     question: "How can organizers create or manage events?",
//     answer:
//       "Organizers can log in with their credentials, access the Organizer Dashboard, create events, edit details, manage registrations, mark attendance, upload media, and issue certificates.",
//   }
];

  // state to track the currently open FAQ
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggle = (question: string) => {
    setActiveIndex((prev) => (prev === question ? null : question));
  };

  return (
    <div>
      <Navbar />

      {/* Header with Background */}
      <div
        className="tripHeader"
        style={{
          backgroundImage: `url(${Vlog})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h3>Frequently Asked Questions</h3>
        </div>
      </div>

      <div className="faq-container">
        {faqs.map((faq) => (
          <div
            key={faq.question} // unique key
            className={`faq-item ${activeIndex === faq.question ? "open" : ""}`}
          >
            {/* Only header clickable */}
            <div className="faq-header" onClick={() => toggle(faq.question)}>
              <h3 className="faq-question">{faq.question}</h3>
              <div className="faq-toggle-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className={`arrow-icon ${
                    activeIndex === faq.question ? "open" : ""
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
                </svg>
              </div>
            </div>




            {activeIndex === faq.question && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>


      

      <LuxuryHotelFooter />
    </div>
  );
};

export default Faq;
