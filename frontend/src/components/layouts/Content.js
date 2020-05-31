import React from "react";
import { Route, Switch } from "react-router-dom";

// component import
import Home from "../Home";
import Send from "../Send";
import Receive from "../Receive";
import Forward from "../Forward";
import LogOut from "../LogOut";
import Track from "../Track";

export default function Content() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/send" component={Send}></Route>
        <Route path="/receive" component={Receive}></Route>
        <Route path="/forward" component={Forward}></Route>
        <Route path="/track" component={Track}></Route>
        <Route path="/logout" component={LogOut}></Route>
      </Switch>
    </div>
  );
}
