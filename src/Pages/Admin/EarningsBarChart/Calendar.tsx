import React from 'react';
import './Calendar.css';

const EventCard: React.FC = () => {
  return (
    <div className="event-container">
      <div className="event-card">
        <div className="event-number">3</div>
        <div className="event-details">
          <h3>Panel Discussion</h3>
          <p>Tech Beyond 2024</p>
          <div className="event-info">
            <span className="category">Technology</span>
            <span className="time">© 10:00 AM - 12:00 PM</span>
          </div>
        </div>
      </div>
      <div className="event-card pink">
        <div className="event-number">5</div>
        <div className="event-details">
          <h3>Live Concert</h3>
          <p>Echo Beats Festival</p>
          <div className="event-info">
            <span className="category">Music</span>
            <span className="time">© 6:00 PM - 11:00 PM</span>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-number">23</div>
        <div className="event-details">
          <h3>Fashion Showcase</h3>
          <p>Spring Trends Runway Show</p>
          <div className="event-info">
            <span className="category">Fashion</span>
            <span className="time">© 3:00 PM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;