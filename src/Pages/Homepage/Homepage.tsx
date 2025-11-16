
// Stories.tsx
import GlassCard from "../../components/Glasscard/Glasscard";
import React, { useEffect, useRef } from "react";
import { stories } from "../../components/Data/data";
import gsap from "gsap";
import "./Homepage.css";
import { FaArrowRightLong } from "react-icons/fa6";
import SearchBar from "../../components/SearchBar/SearchBar";
import BlogCarousel from "../../components/TravelCard/TravelCarousel";
import PopularLocations from "../../components/PopularLocations/PopularLocations";
import DealsSelection from '../../components/DealsSection/DealsSection';
import WinterSpecial from "../../components/WinterSpecial/WinterSpecial";
import TourPackages from "../../components/TourPackages/TourPackages";
import CitySlideshow from "../../components/CitySlideshow/CitySlideshow";
import ParallaxTourSection from "../../components/ParallaxTourSection/ParallaxTourSection";
import Navbar from "../../components/Nav/Navbar";
import LuxuryHotelFooter from "../../components/Footer/Footer";
import PopularDestination from '../../components/PopularDestinations/PopularDestinations'


const storyDuration = 4000;
const contentUpdateDelay = 0.4;

let activeStory = 0;
let storyTimeout: ReturnType<typeof setTimeout>;

const Homepage: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorTextRef = useRef<HTMLParagraphElement | null>(null);

  
  const resetIndexHighlight = (index: number) => {
    const highlights = document.querySelectorAll<HTMLDivElement>(
      ".index .index-highlight"
    );
    const highlight = highlights[index];
    gsap.killTweensOf(highlight);
    gsap.to(highlight, {
      width: "0%",
      duration: 0.3,
      onStart: () => {
        gsap.to(highlight, {
          transformOrigin: "right center",
          scaleX: 0,
          duration: 0.3,
        });
      },
    });
  };

  const animateIndexHighlight = (index: number) => {
    const highlights = document.querySelectorAll<HTMLDivElement>(
      ".index .index-highlight"
    );
    const highlight = highlights[index];
    gsap.set(highlight, {
      width: "0%",
      scaleX: 1,
      transformOrigin: "right center",
    });
    gsap.to(highlight, {
      width: "100%",
      duration: storyDuration / 1000,
      ease: "none",
    });
  };

  const animateNewImage = (imgContainer: HTMLElement) => {
    gsap.set(imgContainer, {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    });
    gsap.to(imgContainer, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const animateImageScale = (
    currentImg: HTMLImageElement,
    upcomingImg: HTMLImageElement
  ) => {
    gsap.fromTo(
      currentImg,
      { scale: 1, rotate: 0 },
      {
        scale: 2,
        rotate: -25,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          currentImg.parentElement?.remove();
        },
      }
    );
    gsap.fromTo(
      upcomingImg,
      { scale: 2, rotate: 25 },
      { scale: 1, rotate: 0, duration: 1, ease: "power4.inOut" }
    );
  };

  const cleanUpElements = () => {
    const profileNameDiv = document.querySelector(".profile-name");
    const titleRows = document.querySelectorAll(".title-row");

    if (profileNameDiv) {
      while (profileNameDiv.childElementCount > 2) {
        profileNameDiv.removeChild(profileNameDiv.firstChild as Node);
      }
    }

    titleRows.forEach((titleRow) => {
      while (titleRow.childElementCount > 2) {
        titleRow.removeChild(titleRow.firstChild as Node);
      }
    });
  };

  const changeStory = () => {
    const previousStory = activeStory;
    activeStory = (activeStory + 1) % stories.length;
    const story = stories[activeStory];

    gsap.to(".profile-name p", {
      y: -24,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
    gsap.to(".title-row h1", {
      y: -48,
      duration: 0.5,
      delay: contentUpdateDelay,
    });

    const currentImgContainer = document.querySelector(".story-img .img");
    const currentImg = currentImgContainer?.querySelector("img");

    setTimeout(() => {
      // Profile name
      const newProfileName = document.createElement("p");
      newProfileName.innerText = story.profileName;
      newProfileName.style.transform = "translateY(24px)";

      const profileNameDiv = document.querySelector(".profile-name");
      profileNameDiv?.appendChild(newProfileName);

      gsap.to(newProfileName, {
        y: 0,
        duration: 0.5,
        delay: contentUpdateDelay,
      });

      
      const titleRows = document.querySelectorAll(".title-row");
      story.title.forEach((line, index) => {
        if (titleRows[index]) {
          const newTitle = document.createElement("h1");
          newTitle.innerText = line;
          newTitle.style.transform = "translateY(48px)";
          titleRows[index].appendChild(newTitle);

          gsap.to(newTitle, {
            y: 0,
            duration: 0.5,
            delay: contentUpdateDelay,
          });
        }
      });

      
      const newImgContainer = document.createElement("div");
      newImgContainer.classList.add("img");
      const newStoryImg = document.createElement("img");
      newStoryImg.src = story.storyImg;
      newStoryImg.alt = story.profileName;
      newImgContainer.appendChild(newStoryImg);

      const storyImgDiv = document.querySelector(".story-img");
      storyImgDiv?.appendChild(newImgContainer);

      if (currentImg && newStoryImg) {
        animateNewImage(newImgContainer);
        animateImageScale(currentImg, newStoryImg);
      }

      resetIndexHighlight(previousStory);
      animateIndexHighlight(activeStory);

      cleanUpElements();

      clearTimeout(storyTimeout);
      storyTimeout = setTimeout(() => changeStory(), storyDuration);
    }, 200);

    setTimeout(() => {
      const profileImg = document.querySelector<HTMLImageElement>(
        ".profile-icon img"
      );
      if (profileImg) profileImg.src = story.profileImg;

      const link = document.querySelector<HTMLAnchorElement>(".link a");
      if (link) {
        link.textContent = story.linkLabel;
        link.href = story.linkSrc;
      }
    }, 600);
  };

  useEffect(() => {
    
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX - cursorRef.current.offsetWidth / 2,
          y: clientY - cursorRef.current.offsetHeight / 2,
          ease: "power2.out",
          duration: 0.3,
        });
      }

      if (cursorTextRef.current) {
        cursorTextRef.current.textContent = ""; 
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    
    storyTimeout = setTimeout(() => changeStory(), storyDuration);
    animateIndexHighlight(activeStory);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(storyTimeout);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <div className="container-stories">
        <div className="cursor" ref={cursorRef}>
          <p ref={cursorTextRef}></p>
        </div>

        <div className="story-img">
          <div className="img">
            <img src={stories[0].storyImg} alt={stories[0].profileName} />
          </div>
        </div>

        <div className="story-holder">
          <div className="story-content">
            <div className="row">
              <div className="title">
                {stories[0].title.map((line, i) => (
                  <div className="title-row" key={i}>
                    <h1>{line}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <button className="Start-button">
                <div className="link">
                  <a
                    href={stories[0].linkSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="startbutton-text"
                  >
                    {stories[0].linkLabel}
                  </a>
                </div>

                <span className="circle">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>

            <div className="row">
              <div className="indices">
                {stories.map((_, i) => (
                  <div className="index" key={i}>
                    <div className="index-highlight"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row"></div>
          </div>

          <div className="glasscard-holder">
            <GlassCard />
          </div>
        </div>
      </div>

      <div className="booking-category">
        <SearchBar></SearchBar>
      </div>

      <div className="hero-section">
        <BlogCarousel></BlogCarousel>
        <DealsSelection></DealsSelection>
        <CitySlideshow></CitySlideshow>

        <WinterSpecial></WinterSpecial>
        <PopularLocations />
        <ParallaxTourSection />
        <PopularDestination></PopularDestination>
        <TourPackages></TourPackages>
      </div>
    </div>
    <LuxuryHotelFooter/>
    </>
  );
};

export default Homepage;
