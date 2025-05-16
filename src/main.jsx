import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { welcome } from "./components/welcome";
import HelloComponent from "./components/HelloComponent";
import "./index.css";
import App from "./App.jsx";

createRoot (document.getElementById("root")).render(
  <StrictMode>
    <welcome name="Arun prakash" />
    <HelloComponent />
  </StrictMode>
)