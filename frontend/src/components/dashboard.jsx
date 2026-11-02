import React from "react";
import Sidebar from "./sidebar";
import "./Dashboard.css";


function Dashboard({ onAddStudent, onShowStudents, onShowDashboard }) {
  return (
    <div className="dashboard-layout">
      <Sidebar 
        onShowStudents={onShowStudents}
        onShowDashboard={onShowDashboard}
        onAddStudent={onAddStudent}
      />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your student management overview.</p>
          </div>

          <div className="header-profile">
            <button className="notification-btn" aria-label="Notifications">
              ♧
            </button>

            <div className="profile-avatar">A</div>

            <div className="profile-details">
              <h4>Admin</h4>
              <p>Administrator</p>
            </div>
          </div>
        </header>

        <section className="dashboard-welcome">
          <div>
            <h2>Welcome to StudentHub 👋</h2>
            <p>Manage your students and keep everything organized.</p>
          </div>

          <button className="primary-btn" onClick={onAddStudent}>
            + Add New Student
          </button>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>Total Students</p>
            <h2>--</h2>
            <span>Registered students</span>
          </div>

          <div className="stat-card">
            <p>Active Students</p>
            <h2>--</h2>
            <span>Currently active</span>
          </div>

          <div className="stat-card">
            <p>New Registrations</p>
            <h2>--</h2>
            <span>Recently registered</span>
          </div>

          <div className="stat-card">
            <p>Total Courses</p>
            <h2>--</h2>
            <span>Available courses</span>
          </div>
        </section>

        <section className="recent-students">
          <div className="section-heading">
            <div>
              <h2>Recent Students</h2>
              <p>Latest student registrations</p>
            </div>

            <button className="view-all-btn">View All →</button>
          </div>

          <div className="empty-state">
            <div className="empty-icon">♙</div>
            <h3>Student records will appear here</h3>
            <p>
              Once we connect your student data, the latest registrations
              will appear in this section.
            </p>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default Dashboard;