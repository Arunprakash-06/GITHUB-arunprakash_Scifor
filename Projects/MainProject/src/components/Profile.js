import React, { useState } from 'react';
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

export default function Profile() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

      <div className="bg-light py-5 flex-grow-1 overflow-auto">
        <div className="container bg-white shadow rounded-4 p-4">
          <div className="row">
            <div className="col-md-9">
              <h4 className="fw-bold mb-1">User Profile</h4>
              <p className="text-muted">Manage your details, view your tier status and change your password.</p>

              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <img
                    src="https://images.unsplash.com/profile-1735911319483-18d123474445image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                    alt="avatar"
                    className="rounded-circle mb-2"
                    style={{ width: 80, height: 80 }}
                  />
                  <h6 className="mb-0">Arun Prakash</h6>
                  <p className="text-muted small">8877554440✅</p>
                </div>

                <div className="col-md-8">
                  <div className="border rounded p-3">
                    <h6 className="mb-3">General Information</h6>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input className="form-control" value="Arun" readOnly />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input className="form-control" value="Prakash" readOnly />
                      </div>
                      <div className="col-md-12 text-end">
                        <button className="btn btn-secondary" disabled>Update</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="border rounded p-3">
                    <h6 className="mb-3">Security</h6>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input className="form-control" value="arunprakash@email.com" readOnly />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Password</label>
                        <input className="form-control" value="********" readOnly />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Phone Number</label>
                        <input className="form-control" value="8877554440" readOnly />
                      </div>
                      <div className="col-md-12 d-flex gap-3 mt-2">
                        <button className="btn btn-outline-primary">Change Password</button>
                        <button className="btn btn-outline-primary">Change Phone Number</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
