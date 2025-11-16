import React, { useRef } from 'react';
import './TourPackages.css';

import { FaRegStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoTodayOutline } from "react-icons/io5";

interface TourCardProps {
  title: string;
  price: string;
  days: string;
  image: string;
  location: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, days, image, location }) => (
  <div className="tour-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="card-header">
      <div className="card-header-description">
        <span className="likes">
          <div className="icon-box"><FaRegStar /></div> 2,332
        </span>
        <span className="price-tag"><FiShare2 /> $50</span>
      </div>
      <span className="days"><IoTodayOutline /> {days}</span>
    </div>
    <div className="tour-content">
      <h3 className="tour-title">{title}</h3>
      <div className="tour-info">
        <p className="location">{location}</p>
      </div>
    </div>
  </div>
);

const TourPackages: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      const touch = e.touches[0];
      const startX = touch.clientX;
      const scrollLeft = scrollRef.current.scrollLeft;

      const handleMove = (moveEvent: TouchEvent) => {
        const currentX = moveEvent.touches[0].clientX;
        const diffX = startX - currentX;
        scrollRef.current!.scrollLeft = scrollLeft + diffX;
      };

      const handleEnd = () => {
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };

      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    }
  };

  const tours: TourCardProps[] = [
    {
      title: 'Bostons new hub for robotics startups', days: '7 day', image: 'https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2022/11/african-girl-adjusting-the-vr-headset-2023-11-27-05-04-47-utc.jpg', location: 'January 3, 2023',
      price: ''
    },
    {
      title: 'Tokyo Institute of Technology taps for fastest AI computer', days: '7 day', image: 'https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2022/12/29969985723_6c5d98cc97_o.jpg',  location: 'December 27, 2022',
      price: ''
    },
    { title: 'OxSight uses augmented reality to aid the visually impaired', days: '7 day', image: 'https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2024/01/people-group-crowd-enjoys-at-tables-with-food-and-2023-11-27-04-59-05-utc.jpg', location: 'January 3, 2023',
      price: ''
    },
    { title: 'Student job finder WayUp acquires competitor Looksharp', days: '7 day', image: 'https://grandconferencev5-2.b-cdn.net/multi-events/wp-content/uploads/sites/2/2017/02/montgomery-alabama-usa-cityscape-2023-11-27-05-15-24-utc.jpg', location: 'January 3, 2023',
      price: ''
    },
  ];

  return (
    <div className="tour-packages">
      <div className="header">
        <h1>Upcoming Events You Can’t Miss</h1>
      </div>
      <p className="description">
        Discover, register, and join exciting events with seamless planning and unforgettable experiences.
      </p>

      <div className="tour-grid" ref={scrollRef} onTouchStart={handleSwipe}>
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            price={tour.price}
            days={tour.days}
            image={tour.image}
            location={tour.location}
          />
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
