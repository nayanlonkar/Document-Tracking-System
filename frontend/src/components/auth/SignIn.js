import React, { useState } from "react";
import "./SignIn.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

export default function SignIn() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function ValidateForm() {
    return username.length > 0 && password.length > 0;
  }
  function onSubmitHandler() {}
  return (
    <div className="SignIn">
      <form className="SignIn-form">
        <FormControl color="primary">
          <InputLabel htmlFor="username">Username:</InputLabel>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="password">Password:</InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            aria-describedy="username-helper-text"
            required
          />
          <FormHelperText id="username-helper-text">
            Your password is safe with us
          </FormHelperText>
        </FormControl>
        <br />
        <Button color="primary" variant="outlined" disabled={!ValidateForm()}>
          Submit
        </Button>
      </form>
    </div>
  );
}
