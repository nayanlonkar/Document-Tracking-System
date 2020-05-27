import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth(props) {
  const [toggle, settoggle] = useState(0);
  return (
    <div className="Auth">
      {toggle === 0 ? (
        <SignIn
          settoggle={settoggle}
          setisLoggedIn={props.setisLoggedIn}
          setuser={props.setuser}
        />
      ) : (
        <SignUp settoggle={settoggle} />
      )}
    </div>
  );
}
