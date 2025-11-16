import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import gsap from "gsap";
import { stories } from "../../components/Data/data";

import "./footer.css";

const storyDuration = 4000; 
const contentUpdateDelay = 0.4; 

const LuxuryHotelFooter = () => {
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const logoNameRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const storyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animateLogoName = (newLogoName: HTMLParagraphElement) => {
    gsap.to(logoNameRef.current?.querySelectorAll("p") || [], {
      y: direction === "next" ? -24 : 24,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
    gsap.to(newLogoName, {
      y: 0,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
  };

  const animateLogoImage = (newImg: HTMLImageElement) => {
    gsap.fromTo(
      newImg,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: contentUpdateDelay }
    );
  };

  const cleanUpElements = () => {
    if (logoNameRef.current && logoNameRef.current.childElementCount > 2) {
      logoNameRef.current.removeChild(logoNameRef.current.firstChild!);
    }
  };

  const changeStory = (isAutomatic = true) => {
    const currentDirection = isAutomatic ? "next" : direction;
    const newIndex =
      currentDirection === "next"
        ? (activeStory + 1) % stories.length
        : (activeStory - 1 + stories.length) % stories.length;

    setActiveStory(newIndex);
    if (!isAutomatic) setDirection(currentDirection);

    const story = stories[newIndex];

    const newLogoName = document.createElement("p");
    newLogoName.innerText = story.profileName;
    newLogoName.style.transform =
      currentDirection === "next" ? "translateY(24px)" : "translateY(-24px)";
    logoNameRef.current?.appendChild(newLogoName);
    animateLogoName(newLogoName);

    if (logoImgRef.current) {
      logoImgRef.current.src = story.profileImg;
      animateLogoImage(logoImgRef.current);
    }

    cleanUpElements();

    if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    storyTimeoutRef.current = setTimeout(() => changeStory(true), storyDuration);
  };

  useEffect(() => {
    stories.forEach((story) => {
      const img = new Image();
      img.src = story.profileImg;
    });

    storyTimeoutRef.current = setTimeout(() => changeStory(true), storyDuration);

    return () => {
      if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    };
  }, [activeStory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreeToTerms) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      setAgreeToTerms(false);
    }
  };

  return (
    <div className="app-container">
      <footer className="footer3">
        <div className="footer-content">

          <div className="footer-section logo-section">
            <div className="logo12">
              <div className="logo-icon">
                <div className="house-icon">
                  <img
                    src={stories[0].profileImg}
                    alt={stories[0].profileName}
                    ref={logoImgRef}
                  />
                </div>
              </div>
              <div className="logo-text-container">
                <div className="logo-text12">{stories[0].profileName}</div>
                <div className="luxury-text">LUXURY EVENTS</div>
              </div>
            </div>
            <p className="footer-description">
              Stay connected with the latest updates, event highlights, and exclusive announcements.  
              Join us in creating unforgettable moments together.
            </p>

            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Information</h3>
            <div className="info-item23">
              <FaPhoneAlt className="info-icon23" size={18} />
              <span>1800-121-3637</span>
            </div>
            <div className="info-item23">
              <Mail className="info-icon23" size={18} />
              <span>needhelp@company.com</span>
            </div>
            <div className="info-item23">
              <MapPin className="info-icon23" size={18} />
              <span>Aptech@ph</span>
            </div>
          </div>

         
          <div className="footer-section newsletter-section">
            <h3>Newsletter</h3>
            <p className="newsletter-description">
              Subscribe to get the latest event updates, special offers, and exclusive invitations straight to your inbox.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="newsletter-button"
                onClick={handleSubscribe}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="newsletter-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <label htmlFor="terms">I agree to all terms and policies</label>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          © Copyright 2024 By Kodesolution.Com
        </div>
      </footer>

      
      <div className="help-chat">Need Help? Chat with us</div>
      <div className="whatsapp-float">
        <MessageCircle size={30} />
      </div>
    </div>
  );
};

export default LuxuryHotelFooter;
