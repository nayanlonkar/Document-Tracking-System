import React, { useState } from "react";
import "./App.css";
import Auth from "./components/auth/auth";
import Container from "./components/container";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setuser] = useState({});
  return <div className="App">{isLoggedIn ? <Container /> : <Auth />}</div>;
}

export default App;
