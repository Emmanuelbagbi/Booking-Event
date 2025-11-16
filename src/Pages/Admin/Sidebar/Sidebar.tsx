/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {  Calendar, Users, BarChart3, Image, Settings } from 'lucide-react';
import './Sidebar.css'
import { LuLayoutDashboard } from "react-icons/lu";

import Logo from '../../../assets/Images/logo1.png'

interface TabButtonProps {
  id: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ id, icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`tab-button-1 ${isActive ? 'active-1' : ''}`}
    aria-label={`Switch to ${label} tab`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => (
  <div className="sidebar-1">
    <div className="sidebar-header-1">
      <span><img src={Logo} alt="logo" className='Admin-logo' /></span>
      <h2>EventSphere</h2>
    </div>
    <nav className="sidebar-nav-1" role="navigation">
      <TabButton id="overview" icon={LuLayoutDashboard} label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
      <TabButton id="events" icon={Calendar} label="Events" isActive={activeTab === 'events'} onClick={setActiveTab} />
      <TabButton id="users" icon={Users} label="Users" isActive={activeTab === 'users'} onClick={setActiveTab} />
      <TabButton id="reports" icon={BarChart3} label="Reports" isActive={activeTab === 'reports'} onClick={setActiveTab} />
      <TabButton id="gallery" icon={Image} label="Gallery" isActive={activeTab === 'gallery'} onClick={setActiveTab} />
      <TabButton id="settings" icon={Settings} label="Settings" isActive={activeTab === 'settings'} onClick={setActiveTab} />
      <button
        className="theme-toggle-1"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  </div>
);


export default Sidebar