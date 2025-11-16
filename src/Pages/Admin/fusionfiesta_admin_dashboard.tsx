
import React, { useState, useEffect } from 'react';
import './Admin-dashboard.css';
import Sidebar from '../Admin/Sidebar/Sidebar';
import TopBar from '../Admin/TopBar/TopBar';
import Overview from '../Admin/Overview/Overview';
import EventManagement from '../Admin/EventManagement/EventManagement';
import UserManagement from '../Admin/UserManagement/UserManagement';
import Reports from '../Admin/Reports/Reports';
import Gallery from '../Admin/Gallery/Gallery';
import Settings from '../Admin/Settings/Settings';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [notifications, setNotifications] = useState(12);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  // Mock data
  const stats = {
    totalEvents: 45,
    pendingApprovals: 8,
    activeUsers: 1247,
    totalCertificates: 892,
  };

  const pendingEvents = [
    {
      id: 1,
      title: 'Tech Symposium 2024',
      organizer: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      date: '2024-12-15',
      category: 'Technical',
      participants: 150,
      status: 'pending',
    },
    {
      id: 2,
      title: 'Cultural Night',
      organizer: 'Prof. Mike Chen',
      department: 'Arts',
      date: '2024-12-20',
      category: 'Cultural',
      participants: 300,
      status: 'pending',
    },
  ];

  const recentFeedback = [
    {
      id: 1,
      event: 'AI Workshop',
      rating: 4.8,
      comments: 'Excellent session with hands-on experience',
      student: 'John Doe',
      date: '2024-11-20',
    },
    {
      id: 2,
      event: 'Sports Meet',
      rating: 4.2,
      comments: 'Well organized but venue could be improved',
      student: 'Jane Smith',
      date: '2024-11-18',
    },
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High server load detected',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'info',
      message: '5 new user registrations pending approval',
      time: '15 minutes ago',
    },
    {
      id: 3,
      type: 'error',
      message: 'Failed certificate upload for Event #234',
      time: '1 hour ago',
    },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`admin-dashboard-1 theme-${theme}-1`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content-1">
        <TopBar notifications={notifications} setNotifications={setNotifications} />
        <div className="content-area-1">
          {activeTab === 'overview' && <Overview stats={stats} systemAlerts={systemAlerts} />}
          {activeTab === 'events' && <EventManagement pendingEvents={pendingEvents} setSelectedEvent={setSelectedEvent} />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'reports' && <Reports recentFeedback={recentFeedback} />}
          {activeTab === 'gallery' && <Gallery />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;