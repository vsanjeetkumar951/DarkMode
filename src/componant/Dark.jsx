import React from "react";
import { useState } from "react";

function Dark() {
  const [mode, setMode] = useState("light");

  function colorChange() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div className="height">
      <div>
        <h1 style={{ color: mode === "dark" ? "white" : "black" }}>
          This is Dark and Light Mode Button
        </h1>
        {mode === "light" ? (
          <button onClick={colorChange}>Dark</button>
        ) : (
          <button onClick={colorChange}>White</button>
        )}
      </div>
    </div>
  );
}

export default Dark;
