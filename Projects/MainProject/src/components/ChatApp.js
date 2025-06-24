import React, { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaSmile,
  FaMicrophone
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  MdDashboard,
  MdMessage,
  MdPerson,
  MdAssignment
} from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${
      active ? "bg-primary text-white" : "text-secondary hover-bg-light"
    }`}
    style={{ cursor: "pointer" }}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const MessageItem = ({ name, time, active, preview }) => (
  <div
    className={`d-flex gap-2 p-3 ${active ? "bg-light" : "hover-bg-light"}`}
    style={{ cursor: "pointer" }}
  >
    <div       
      className="rounded-circle bg-secondary"
      style={{ width: "40px", height: "40px" }}         
    ></div>
    <div className="flex-fill">
      <div className="d-flex justify-content-between align-items-center">
        <strong className="small">{name}</strong>
        <small className="text-muted">{time}</small>
      </div>
      <p className="text-muted small mb-0 text-truncate">{preview}</p>
    </div>
  </div>
);

const ChatBubble = ({ message, time, isOwn }) => (
  <div className={`d-flex ${isOwn ? "justify-content-end" : "justify-content-start"} my-2`}>
    <div
      className={`p-3 rounded ${isOwn ? "bg-primary text-white" : "bg-light text-dark"}`}
      style={{ maxWidth: "70%" }}
    >
      <p className="mb-1">{message}</p>
      <small className="d-block text-end text-muted">{time}</small>
    </div>
  </div>
);

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="d-flex vh-100 font-sans">
      <aside
        className="bg-dark text-white d-flex flex-column justify-content-between p-3"
        style={{ width: "250px" }}
      >
        <nav>
          <h1 className="fs-4 fw-bold mb-4">CHATY</h1>
          <SidebarItem
            icon={<MdDashboard />}
            label="Dashboard"
            active={location.pathname === "/dashboard"}
            onClick={() => navigate("/dashboard")}
          />
          <SidebarItem
            icon={<MdMessage />}
            label="Messages"
            active={location.pathname === "/chat"}
            onClick={() => navigate("/chat")}
          />
          <SidebarItem
            icon={<MdPerson />}
            label="Profile"
            active={location.pathname === "/profile"}
            onClick={() => navigate("/profile")}
          />
          <SidebarItem
            icon={<MdAssignment />}
            label="Settings"
            active={location.pathname === "/settings"}
            onClick={() => navigate("/settings")}
          />
        </nav>
        <div
          className="d-flex align-items-center gap-2 text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <FiLogOut /> <span>Sign Out</span>
        </div>
      </aside>

      <main className="d-flex flex-grow-1 bg-light">
        <section className="border-end overflow-auto" style={{ width: "30%" }}>
          <div className="p-3 border-bottom">
            <h2 className="fs-5 fw-semibold">Messages</h2>
            <div className="d-flex gap-3 mt-2 small text-muted">
              <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>All Messages</span>
              <span>Unread</span>
              <span>Draft</span>
              <span>Archived</span>
            </div>
          </div>
            
          <MessageItem 
          name="Sean Shahriar" 
          time="7:39 PM" 
          active className= "activeMessage"
          preview="Hello..."
          />
          <MessageItem name="Dennis Callis" time="7:32 PM" preview="Could you send your mobile number?" />
          <MessageItem name="Farzu Alvida" time="7:30 PM" preview="Where are you now?" />
          
        </section>

        <section className="d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
            <div className="d-flex align-items-center gap-2">
              <div>
                <img
                    src="https://images.unsplash.com/profile-1676575638643-2f7a8c4521acimage?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                    alt="avatar"
                    className="rounded-circle mb-2"
                    style={{ width: 50, height: 50 }}
                  />
                
              </div>
              <div>
                <strong className="d-block">Sean Shahriar</strong>
                <small className="text-success">Active Now</small>
              </div>
            </div>
            <div className="d-flex gap-3 text-muted">
              <FaSearch />
              <FaPlus />
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="flex-grow-1 overflow-auto p-3 bg-light">
            <ChatBubble message="Hello..." time="7:00 PM" />
            <ChatBubble message="Hi, What are you doing!" time="8:00 PM" isOwn />
            <ChatBubble message="I'm fine, Have you finished your work?" time="8:05 PM" />
            <ChatBubble message="Typing response..." time="8:10 PM" isOwn />
          </div>

          <div className="d-flex align-items-center gap-2 p-3 border-top bg-white">
            <FaSmile className="text-muted" />
            <input
              type="text"
              className="form-control flex-grow-1"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <FaMicrophone className="text-muted" />
            <button className="btn btn-primary">Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}