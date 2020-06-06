import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="MenuBar">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/send">
          <button>Send</button>
        </Link>
        <Link to="/receive">
          <button>Received</button>
        </Link>
        <Link to="/forward">
          <button>Forward</button>
        </Link>
        <Link to="/track">
          <button>Track</button>
        </Link>
        <Link to="/logout">
          <button>Log Out</button>
        </Link>
      </nav>
    </div>
  );
}
