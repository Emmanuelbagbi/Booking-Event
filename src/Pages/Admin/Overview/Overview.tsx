import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Award,
  Bell,
  Settings,
  Plus,
  Download,
  UserCheck,
  Shield,
  AlertTriangle,
} from "lucide-react";
import StatCard from "../StatCard/StatCard";
import DashboardCharts from "../DashboardCharts/DashboardCharts";
import EarningsBarChart from "../CongratsCard/EarningsBarChart";
import FinanceStats1 from "../EarningsBarChart/Calendar";
import "./Overview.css";

interface Stats {
  totalEvents: number;
  pendingApprovals: number;
  activeUsers: number;
  totalCertificates: number;
}

interface SystemAlert {
  id: number;
  type: "info" | "warning" | "error";
  message: string;
  time: string;
}

const Overview: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalEvents: 0,
    pendingApprovals: 0,
    activeUsers: 0,
    totalCertificates: 0,
  });

  const [systemAlerts, setSystemAlerts] = useState<SystemAlert[]>([]);

  useEffect(() => {
    // 🔹 Replace with real API fetch later
    setStats({
      totalEvents: 128,
      pendingApprovals: 5,
      activeUsers: 340,
      totalCertificates: 76,
    });

    setSystemAlerts([
      { id: 1, type: "warning", message: "Database usage nearing limit.", time: "2h ago" },
      { id: 2, type: "error", message: "Failed login attempt detected.", time: "5h ago" },
      { id: 3, type: "info", message: "New system update available.", time: "1d ago" },
    ]);
  }, []);

  return (
    <div className="overview-content-1">
      {/* ===== Stats Section ===== */}
      <div className="stats-grid-1" role="region" aria-label="Overview statistics">
        <StatCard
          icon={Calendar}
          title="Total Events"
          value={stats.totalEvents}
          change={{ type: "up", value: 12 }}
          color="blue"
        />
        <StatCard
          icon={Clock}
          title="Pending Approvals"
          value={stats.pendingApprovals}
          change={{ type: "up", value: 3 }}
          color="orange"
        />
        <StatCard
          icon={Users}
          title="Active Users"
          value={stats.activeUsers}
          change={{ type: "up", value: 8 }}
          color="green"
        />
        <StatCard
          icon={Award}
          title="Certificates Issued"
          value={stats.totalCertificates}
          change={{ type: "up", value: 15 }}
          color="purple"
        />

        <div className="div">
          <div className="div-chart">
            <h3>Users</h3>
            <h2>4.840</h2>
            <small className="last-month">Since last month</small>
          </div>
          <DashboardCharts />
        </div>
      </div>

      {/* ===== Alerts & Actions ===== */}
      <div className="dashboard-grid-1" role="region" aria-label="Quick actions and alerts">
        <div className="dashboard-card-1">
          <div className="card-header-1">
            <h3>Recent System Alerts</h3>
            <Bell size={20} />
          </div>
          <div className="alerts-list-1" role="list">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className={`alert-item-1 alert-${alert.type}-1`} role="listitem">
                <AlertTriangle size={16} />
                <div className="alert-content-1">
                  <p>{alert.message}</p>
                  <span className="alert-time-1">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card-1">
          <div className="card-header-1">
            <h3>Quick Actions</h3>
            <Settings size={20} />
          </div>
          <div className="quick-actions-1" role="navigation">
            <button className="quick-action-btn-1" aria-label="Create new event">
              <Plus size={20} />
              <span>Create Event</span>
            </button>
            <button className="quick-action-btn-1" aria-label="Export reports">
              <Download size={20} />
              <span>Export Reports</span>
            </button>
            <button className="quick-action-btn-1" aria-label="Manage users">
              <UserCheck size={20} />
              <span>Manage Users</span>
            </button>
            <button className="quick-action-btn-1" aria-label="System settings">
              <Shield size={20} />
              <span>System Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Charts Section ===== */}
      <div className="dashbaord-footermain">
        <div className="recent-activity-2" role="region" aria-label="Event statistics">
          <h3 style={{ color: "white" }}>Department-wise Event Statistics</h3>
          <br />
          <div className="activity-chart-2">
            <FinanceStats1 />
          </div>
        </div>

        <div className="recent-activity-1" role="region" aria-label="Event statistics">
          <h3>Department-wise Event Statistics</h3>
          <div className="activity-chart-1">
            <EarningsBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
