import React, { useState } from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import Container from "./components/layouts/Container";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [user, setuser] = useState(null);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Container />
      ) : (
        <Auth setisLoggedIn={setisLoggedIn} setuser={setuser} />
      )}
    </div>
  );
}

export default App;
