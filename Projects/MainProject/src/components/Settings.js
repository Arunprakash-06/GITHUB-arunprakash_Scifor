import React, { useState } from "react";
import { MdDashboard, MdMessage, MdPerson, MdAssignment } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    className={`d-flex align-items-center gap-2 py-2 px-3 ${active ? 'bg-primary text-white rounded' : 'text-secondary'}`}
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

export default function Settings() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const notificationOptions = [
    {
      label: "Comments",
      desc: "Notifications for comments on your posts and replies."
    },
    {
      label: "Tags",
      desc: "Notifications when someone tags you in a comment or post."
    },
    {
      label: "Reminders",
      desc: "Reminders of updates you might have missed."
    },
    {
      label: "More activity about you",
      desc: "Mentions, posts on your profile, and interactions."
    }
  ];

  return (
    <div className="d-flex vh-100 font-sans">
      <aside className="bg-dark text-white d-flex flex-column justify-content-between p-3" style={{ width: '250px' }}>
        <div>
          <h1 className="fs-4 fw-bold mb-4">CHATY</h1>
          <SidebarItem icon={<MdDashboard />} label="Dashboard" active={location.pathname === "/dashboard"} onClick={() => navigate("/dashboard")} />
          <SidebarItem icon={<MdMessage />} label="Messages" active={location.pathname === "/chat"} onClick={() => navigate("/chat")} />
          <SidebarItem icon={<MdPerson />} label="Profile" active={location.pathname === "/profile"} onClick={() => navigate("/profile")} />
          <SidebarItem icon={<MdAssignment />} label="Settings" active={location.pathname === "/settings"} onClick={() => navigate("/settings")} />
        </div>
        <div className="d-flex align-items-center gap-2 text-danger" style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
          <FiLogOut /> <span>Sign Out</span>
        </div>
      </aside>

      <div className="d-flex flex-grow-1 flex-column p-4 overflow-auto" style={{ background: "#f9fafb" }}>
        <a href="#" className="text-muted mb-3 d-block">Back</a>
        <h4 className="fw-bold">Settings</h4>

        <ul className="nav nav-tabs mt-3">
          {[
            "My details", "Profile", "Password", "Email", "Notifications"
          ].map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                className={`nav-link ${tab === "Notifications" ? "active" : ""}`}
                href="#"
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h6 className="fw-bold">Notification settings</h6>
          <p className="text-muted small">
            We may still send you important notifications about your account outside of your notification settings.
          </p>

          {notificationOptions.map(({ label, desc }, idx) => (
            <div className="border-top py-3" key={idx}>
              <strong>{label}</strong>
              <p className="text-muted small">{desc}</p>
              <div className="form-check form-switch d-inline-block me-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  defaultChecked={idx < 2}
                />
                <label className="form-check-label">Push</label>
              </div>
              <div className="form-check form-switch d-inline-block me-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  defaultChecked={idx === 0}
                />
                <label className="form-check-label">Email</label>
              </div>
              <div className="form-check form-switch d-inline-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                />
                <label className="form-check-label">SMS</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
