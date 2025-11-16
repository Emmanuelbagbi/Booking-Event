import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Nav/Navbar";
import LuxuryHotelFooter from "../../components/Footer/Footer";
import Vlog from "../../assets/Images/home-6-slider-img-4.jpg";
import "./Events.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";

// Event model
interface Event {
  id: string;
  image: string;
  title: string;
  location: string;
  department: string;
  date: string;
  category: string;
  popularity: number;
  availableSlots: number;
}

// Share platforms type
type SharePlatform = "facebook" | "twitter" | "linkedin" | "whatsapp" | "email";

// DealCard component
const DealCard1: React.FC<{
  event: Event;
  liked: boolean;
  toggleLike: (id: string) => void;
}> = ({ event, liked, toggleLike }) => {
  const isFull = event.availableSlots <= 0;

  const handleShare = (platform: SharePlatform) => {
    const shareText = `Join ${event.title} on ${new Date(event.date).toLocaleDateString()} at ${event.location}!`;
    const shareUrl = window.location.href;

    const urls: Record<SharePlatform, string> = {
      facebook: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      email: `mailto:?subject=${encodeURIComponent(
        event.title
      )}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
    };

    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <Link to={`/events/${event.id}`} className="deal-card-1-link">
      <div className="deal-card-1">
        <div className="deal-image-1">
          <img src={event.image} alt={event.title} />
          <div className="discount-badge-1">
            {isFull ? "Full" : `${event.availableSlots} slots left`}
          </div>
          <div
            className="heart-icon-1"
            onClick={(e) => {
              e.preventDefault(); // prevent navigation when liking
              toggleLike(event.id);
            }}
          >
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </div>
        </div>

        <div className="deal-info-1">
          <h3>{event.title}</h3>
          <p className="location1-1">
            <CiLocationOn style={{ fontSize: "20px" }} /> {event.location}
          </p>
          <div className="rating-1">
            <HiOutlineBuildingOffice2 style={{ fontSize: "20px" }} />{" "}
            {event.department}
          </div>

          <div className="route-1">
            <span>
              <CiCalendarDate style={{ fontSize: "20px" }} />{" "}
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}{" "}
              @{" "}
              {new Date(event.date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>

            <div className="route-actions-1">
              <button
                className={`register-btn-1 ${isFull ? "disabled" : ""}`}
                disabled={isFull}
              >
                {isFull ? "Closed" : "Register"}
              </button>

              <div className="bookmark">
                <RiShareForwardFill
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigation when sharing
                    handleShare("facebook");
                  }}
                  title="Share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Events page
const Events: React.FC = () => {
  const [likedEvents, setLikedEvents] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [sortOption, setSortOption] = useState<"date" | "popularity">("date");

  const toggleLike = (id: string) => {
    setLikedEvents((prev) =>
      prev.includes(id)
        ? prev.filter((eventId) => eventId !== id)
        : [...prev, id]
    );
  };

  const events: Event[] = [
    {
      id: "1",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/happy-businesswoman-attending-a-conference-in-conv-2023-11-27-05-08-44-utc-700x466.jpg",
      title: "AI & Machine Learning Workshop",
      location: "Auditorium A",
      department: "Computer Science",
      date: "2025-11-15T09:00:00",
      category: "Technical",
      popularity: 120,
      availableSlots: 30,
    },
    {
      id: "2",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/overjoyed-young-muslim-businesswoman-in-hijab-gett-2023-11-27-05-34-18-utc-700x466.jpg",
      title: "Cultural Dance Night",
      location: "Main Hall",
      department: "Arts",
      date: "2025-11-20T18:00:00",
      category: "Cultural",
      popularity: 200,
      availableSlots: 0,
    },
    {
      id: "3",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/collaboration-management-and-a-business-woman-wit-2023-11-27-04-55-33-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "4",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/blogger-setting-camera-2023-11-27-05-29-56-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "5",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/showing-a-dedication-to-education-2023-11-27-05-02-28-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "6",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/black-adult-education-teacher-assisting-his-studen-2023-11-27-05-08-29-utc.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "7",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/education-campus-friendship-and-people-concept-2023-11-27-05-35-20-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "8",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/group-of-friends-making-party-at-home-on-new-year-2023-12-28-01-34-52-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    },
    {
      id: "9",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/education-campus-friendship-and-people-concept-2023-11-27-05-35-20-utc-700x466.jpg",
      title: "Interdepartment Football Tournament",
      location: "College Stadium",
      department: "Sports",
      date: "2025-11-25T16:00:00",
      category: "Sports",
      popularity: 300,
      availableSlots: 12,
    }
  ];

  // Filter & sort
  const filteredEvents = events.filter((event) =>
    filterCategory === "All" ? true : event.category === filterCategory
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "date")
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortOption === "popularity") return b.popularity - a.popularity;
    return 0;
  });

  return (
    <div>
      <Navbar />

      {/* Header */}
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
          <h3>Most popular events around the world</h3>
        </div>
      </div>

      {/* Events */}
      <div className="deals-container-1">
        <div className="caption-header">
          <div className="caption-sub">
            <h1 className="deals-h1-1">Upcoming Events</h1>
            <p>Browse technical, cultural, and sports events happening soon.</p>
          </div>

          {/* Filter & Sort */}
          <div className="controls-1">
            <div className="select-div-button">
              <select
                className="select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div className="select-div-button-1">
              <select
                className="select"
                value={sortOption}
                onChange={(e) =>
                  setSortOption(e.target.value as "date" | "popularity")
                }
              >
                <option value="date">Sort by Date</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Event cards */}
        <div className="deals-grid-1">
          {sortedEvents.map((event) => (
            <DealCard1
              key={event.id}
              event={event}
              liked={likedEvents.includes(event.id)}
              toggleLike={toggleLike}
            />
          ))}
        </div>
      </div>

      <LuxuryHotelFooter />
    </div>
  );
};

export default Events;
