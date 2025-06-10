import React, { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(false);

  const toggleMsg = () => {
    setIsShown(!isShown);
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "18px",
    backgroundColor: isShown ? "#ff4d4d" : "#4CAF50",
    color: "BLACK",
    border: "solid yellow",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const headingStyle = {
    fontSize: "64px",
    fontWeight: "bold",
    color: "Purple",
    marginTop: "20px",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    textDecoration: "underline",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button style={buttonStyle} onClick={toggleMsg}>
        {isShown ? "HIDE" : "SHOW"}
      </button>
      {isShown && <h2 style={headingStyle}>WELCOME TO REACT!</h2>}
    </div>
  );
}

export default App;
