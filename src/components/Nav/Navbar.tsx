import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { stories } from "../../components/Data/data";
import "./nav.css";

const storyDuration = 4000;
const contentUpdateDelay = 0.4;

const Navbar: React.FC = () => {
  const logoNameRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const storyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div
        className="logo"
        aria-label={`Profile: ${stories[activeStory].profileName}`}
      >
        <div className="logo-image">
          <img
            src={stories[0].profileImg}
            alt={stories[0].profileName}
            ref={logoImgRef}
          />
        </div>
        <div className="profile-name" ref={logoNameRef}>
          <p>{stories[0].profileName}</p>
        </div>
      </div>

      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-span"></span>
        <span className="hamburger-span"></span>
        <span className="hamburger-span"></span>
      </button>

      <div className={`left-nav ${isOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <span className="glass">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </span>
          <span className="glass">
            <Link to="/Events" onClick={() => setIsOpen(false)}>Events</Link>
          </span>
          <span className="glass">
            <Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          </span>
          <span className="glass">
            <Link to="/Faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          </span>
          <span className="glass">
            <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
          </span>
        </nav>

        <div className="user-auth">
          <span className="signup">
            <span className="dot"></span>
            <Link to="/Signup" onClick={() => setIsOpen(false)}>Signup</Link>
          </span>
          <button className="login">
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              Login <FaArrowRightLong style={{ paddingTop: "5px" }} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
