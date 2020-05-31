import React from "react";
import MenuBar from "./MenuBar";

export default function Header() {
  const background_style = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <div className="Header" style={background_style}>
      <h1>Document Tracking...</h1>
      <MenuBar />
    </div>
  );
}
