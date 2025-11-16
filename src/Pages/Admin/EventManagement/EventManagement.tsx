import React, { useState, useEffect } from 'react';
import { Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import EventCard from '../EventCard/EventCard';
import './EventManagement.css';
import { toast } from 'react-toastify';
// CSS import should be done once globally (index.tsx or App.tsx), not repeated here:
// import 'react-toastify/dist/ReactToastify.css';

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

interface EventManagementProps {
  pendingEvents: Event[];
  setSelectedEvent: (event: Event | null) => void;
  onEventsUpdate: (updatedEvents: Event[]) => void;
}

const EventManagement: React.FC<EventManagementProps> = ({ 
  pendingEvents, 
  setSelectedEvent,
  onEventsUpdate 
}) => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [events, setEvents] = useState<Event[]>(pendingEvents);

  // Approve
  const handleApprove = (id: number) => {
    const approvedEvent = events.find(e => e.id === id);
    if (!approvedEvent) return;

    setEvents(prev => prev.filter(e => e.id !== id));

    const updatedEvent = { ...approvedEvent, status: 'Approved' };
    const updatedAllEvents = [...allEvents.filter(e => e.id !== id), updatedEvent];
    setAllEvents(updatedAllEvents);
    onEventsUpdate(updatedAllEvents);

    toast.success(`Event "${approvedEvent.title}" approved`);
  };

  const handleReject = (id: number) => {
    const rejectedEvent = events.find(e => e.id === id);
    if (!rejectedEvent) return;

    setEvents(prev => prev.filter(e => e.id !== id));

    const updatedEvent = { ...rejectedEvent, status: 'Rejected' };
    const updatedAllEvents = [...allEvents.filter(e => e.id !== id), updatedEvent];
    setAllEvents(updatedAllEvents);
    onEventsUpdate(updatedAllEvents);

    toast.error(`Event "${rejectedEvent.title}" rejected`);
  };

  const handleDelete = (id: number) => {
    const deleted = allEvents.find(e => e.id === id);
    setEvents(prev => prev.filter(e => e.id !== id));
    const updatedAllEvents = allEvents.filter(e => e.id !== id);
    setAllEvents(updatedAllEvents);
    onEventsUpdate(updatedAllEvents);

    toast.info(`Event "${deleted?.title ?? 'event'}" deleted`);
  };

  // Export
  const handleExport = () => {
    toast.success('Events exported successfully');
  };

  useEffect(() => {
    setEvents(pendingEvents);
    if (allEvents.length === 0) {
      setAllEvents(pendingEvents);
    }
  }, [pendingEvents]);

  return (
    <div className="event-management-1">

      <div className="section-header-1">
        <h3>Pending Event Approvals</h3>
        <div className="header-actions-1">
          <button className="btn-1 btn-outline-1" aria-label="Filter events">
            <Filter size={16} /> Filter
          </button>
          <button className="btn-1 btn-primary-1" aria-label="Export events" onClick={handleExport}>
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="events-grid-1" role="list" aria-label="Pending events list">
        {events.length > 0 ? (
          events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onApprove={handleApprove}
              onReject={handleReject}
              onView={(ev) => setSelectedEvent(ev)}
            />
          ))
        ) : (
          <p className="no-events-1">No pending events</p>
        )}
      </div>

      <div className="all-events-section-1" role="region" aria-label="All events overview">
        <h3>All Events Overview</h3>
        <div className="table-container-1">
          <table className="events-table-1" role="grid">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Organizer</th>
                <th>Date</th>
                <th>Category</th>
                <th>Participants</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allEvents.map(event => (
                <tr key={event.id} role="row">
                  <td>{event.title}</td>
                  <td>{event.organizer}</td>
                  <td>{event.date}</td>
                  <td>
                    <span className={`category-tag-1 category-${event.category.toLowerCase()}-1`}>
                      {event.category}
                    </span>
                  </td>
                  <td>{event.participants}</td>
                  <td>
                    <span className={`status-badge-1 status-${event.status.toLowerCase()}-1`}>
                      {event.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions-1" role="toolbar">
                      <button className="action-btn-1" aria-label="View event" onClick={() => setSelectedEvent(event)}>
                        <Eye size={16} />
                      </button>
                      <button className="action-btn-1" aria-label="Edit event">
                        <Edit size={16} />
                      </button>
                      <button className="action-btn-1 danger-1" aria-label="Delete event" onClick={() => handleDelete(event.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
