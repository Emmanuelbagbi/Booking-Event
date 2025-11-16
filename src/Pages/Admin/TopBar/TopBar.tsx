import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Settings } from "lucide-react";
import { VscVerifiedFilled } from "react-icons/vsc";
import "./TopBar.css";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([2]); // empty skeleton

  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, seen: true } : n))
    );
  };

  return (
    <div className="top-bar-1">
      <div className="top-bar-left-1">
        <h2>Dashboard</h2>
        <p>Hello Emmyboi, welcome back!</p>
      </div>

      <div className="search-bar-1">
        <input
          type="text"
          placeholder="Search anything"
          aria-label="Search dashboard"
        />
        <Search size={18} />
      </div>

      <div className="top-bar-actions-1">
        <div className="notification-container" ref={panelRef}>
          <button
            className="icon-btn-1 notification-btn-1"
            aria-label="Notifications"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bell size={20} />
            {notifications.some((n) => !n.seen) && (
              <span className="notification-badge-1 ">
                {notifications.filter((n) => !n.seen).length}
              </span>
            )}
          </button>

          {isOpen && (
            <div className="notification-panel">
              <h4>Notifications</h4>
              {notifications.length === 0 ? (
                <p className="no-notifications">No notifications found.</p>
              ) : (
                notifications.map((note) => (
                  <div
                    key={note.id}
                    className={`notification-box ${
                      note.seen ? "seen" : "unseen"
                    }`}
                  >
                    <div className="notification-header">
                      <strong>{note.title || "Notification"}</strong>
                      {!note.seen && (
                        <button
                          className="close-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(note.id);
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <p>{note.message}</p>
                    <small>
                      {note.timestamp
                        ? new Date(note.timestamp).toLocaleString()
                        : "Unknown time"}
                    </small>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <button className="icon-btn-1" aria-label="Settings">
          <Settings size={20} />
        </button>

        <div className="user-profile-1">
          <img
            src="https://i.pravatar.cc/40"
            alt="User avatar"
            className="user-avatar-1"
          />
          <div className="user-info-1">
            <span>
              Emmyboi <VscVerifiedFilled className="verified" />
            </span>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
