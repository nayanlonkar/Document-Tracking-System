import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Container(props) {
  return (
    <div className="Container">
      <Header />
      <Content user={props.user} />
    </div>
  );
}
