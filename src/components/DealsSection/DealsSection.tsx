import React, { useRef, useState } from 'react';
import './DealsSection.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiShareForwardFill } from 'react-icons/ri';

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

const DealCard: React.FC<{ event: Event }> = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out this event: ${event.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Event link copied to clipboard!");
    }
  };

  return (
    <div className="deal-card">
      {/* Event image */}
      <div className="deal-image">
        <img src={event.image} alt={event.title} />
        <div className={`discount-badge ${event.availableSlots > 0 ? "open" : "full"}`}>
          {event.availableSlots > 0
            ? `${event.availableSlots} slots left`
            : "Full"}
        </div>
        <div
          className="heart-icon"
          onClick={() => setLiked(!liked)}
          role="button"
          aria-label="like event"
        >
          {liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
        </div>
      </div>

      {/* Event Info */}
      <div className="deal-info">
        <h3>{event.title}</h3>

        <p className="location1">
          <CiLocationOn style={{ fontSize: "18px" }} /> {event.location}
        </p>

        <div className="rating">
          <HiOutlineBuildingOffice2 style={{ fontSize: "18px" }} />{" "}
          {event.department}
        </div>

        <div className="route">
          <CiCalendarDate style={{ fontSize: "18px" }} />
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
        </div>

        {/* Actions: Register + Share */}
        <div className="actions">
          {event.availableSlots > 0 ? (
            <button className="register-btn">Register</button>
          ) : (
            <button className="closed-btn" disabled>
              Closed
            </button>
          )}
          <button className="share-btn" onClick={handleShare}>
            <RiShareForwardFill />
          </button>
        </div>
      </div>
    </div>
  );
};

const LastMinuteDeals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      title: "Content Creation Bootcamp",
      location: "Studio Room",
      department: "Media",
      date: "2025-11-18T14:00:00",
      category: "Workshop",
      popularity: 180,
      availableSlots: 25,
    },
    {
      id: "5",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/showing-a-dedication-to-education-2023-11-27-05-02-28-utc.jpg",
      title: "Career Fair & Networking",
      location: "Conference Hall",
      department: "Business",
      date: "2025-11-22T10:00:00",
      category: "Career",
      popularity: 250,
      availableSlots: 50,
    },
    {
      id: "6",
      image: "https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/black-adult-education-teacher-assisting-his-studen-2023-11-27-05-08-29-utc.jpg",
      title: "Education Technology Expo",
      location: "Exhibition Center",
      department: "Education",
      date: "2025-11-28T11:00:00",
      category: "Exhibition",
      popularity: 320,
      availableSlots: 40,
    },
  ];

  return (
    <div className="deals-container">
      <h1 className="deals-h1">Upcoming Events</h1>
      <p>
        Browse technical, cultural, and sports events. Explore the ones that interest you!
      </p>

      <div className="deals-grid" ref={scrollRef}>
        {events.map((event) => (
          <DealCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default LastMinuteDeals;
