import React from "react";

function Sidebar({ onShowStudents, onShowDashboard, onAddStudent }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">🎓</span>
        <h2>StudentHub</h2>
      </div>

      <div className="sidebar-menu">
        <p className="menu-heading">MAIN MENU</p>

        <a href="/" className="sidebar-link active" onClick = {(e) => {
            e.preventDefault();
            onShowDashboard();
        }}
        >
          <span>▦</span>
          <span>Dashboard</span>
        </a>

        <a href="/students" className="sidebar-link" onClick={(e) => {
            e.preventDefault();
            onShowStudents()
        }}>
          <span>♙</span>
          <span>Students</span>
        </a>

        <a href="/add-student" className="sidebar-link" onClick={(e) => {
            e.preventDefault();
            onAddStudent();
        }}>
          <span>＋</span>
          <span>Add Student</span>
        </a>

        <p className="menu-heading settings-heading">PREFERENCES</p>

        <a href="/settings" className="sidebar-link">
          <span>⚙</span>
          <span>Settings</span>
        </a>
      </div>

      <div className="sidebar-footer">
        <div className="admin-avatar">A</div>
        <div className="admin-info">
          <h4>Admin</h4>
          <p>Administrator</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;