import React from "react";
import { Calendar, Users, Eye, CheckCircle, XCircle } from "lucide-react";
import "./EventCard.css";

interface Event {
  id: number;
  title: string;
  organizer: string;
  department: string;
  date: string;
  category: string;
  participants: number;
  status: string;
}

interface EventCardProps {
  event: Event;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onView: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onApprove, onReject, onView }) => {
  return (
    <div className="event-card-3">
      <div className="event-header-1">
        <div>
          <h4>{event.title}</h4>
          <p className="event-organizer-1">by {event.organizer}</p>
        </div>
        <span className={`status-badge-1 status-${event.status}-1`}>
          {event.status}
        </span>
      </div>

      <div className="event-details-1">
        <div className="detail-item-1">
          <Calendar size={16} />
          <span>{event.date}</span>
        </div>
        <div className="detail-item-1">
          <Users size={16} />
          <span>{event.participants} expected</span>
        </div>
        <div className="detail-item-1">
          <span className={`category-tag-1 category-${event.category.toLowerCase()}-1`}>
            {event.category}
          </span>
        </div>
      </div>

      <div className="event-actions-1">
        <button className="btn-1 btn-outline-1" onClick={() => onView(event)}>
          <Eye size={16} /> View
        </button>
        <button className="btn-1 btn-success-1" onClick={() => onApprove(event.id)}>
          <CheckCircle size={16} /> Approve
        </button>
        <button className="btn-1 btn-danger-1" onClick={() => onReject(event.id)}>
          <XCircle size={16} /> Reject
        </button>
      </div>
    </div>
  );
};

export default EventCard;
