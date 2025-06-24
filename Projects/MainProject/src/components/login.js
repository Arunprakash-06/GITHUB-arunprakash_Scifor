import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();       // prevent page refresh
    navigate("/chat");        // go to chat page after login
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 rounded-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center fw-bold">Log in</h3>
        <div className="text-center my-2">
          <div className="border-bottom mx-auto" style={{ width: "60px", borderBottom: "4px solid #9b34ef" }} />
        </div>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button className="btn btn-light rounded-circle border shadow-sm"><i className="bi bi-facebook"></i></button>
          <button className="btn btn-light rounded-circle border shadow-sm"><i className="bi bi-linkedin"></i></button>
          <button className="btn btn-light rounded-circle border shadow-sm"><i className="bi bi-twitter"></i></button>
        </div>
        <p className="text-center text-muted small">or use your email</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control rounded-3" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control rounded-3" placeholder="Password" />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="text-decoration-none">Forgot Password?</a>
          </div>
            
           
          <button type="submit" className="btn w-100 btn-outline-dark">
            submit
          </button>
            

          </form>
          <div className="d-flex justify-content-between mt-4">
            <a href="#" className="text-decoration-none fw-bold">Privacy Policy</a>
            <a href="#" className="text-decoration-none fw-bold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    );
  }

export default Login;
