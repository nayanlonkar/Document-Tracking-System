import React, { useState } from "react";
import "./SignIn.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: "150%",
  },
  inputLabel: {
    fontSize: "large",
  },
  button: {
    marginTop: "40px",
    width: "120px",
  },
});

export default function SignIn() {
  const classes = useStyles();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function ValidateForm() {
    return username.length > 0 && password.length > 0;
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(`username is ${username}`);
    console.log(`password is ${password}`);
  }

  return (
    <div className="SignIn">
      <form className="SignIn-form" onSubmit={onSubmitHandler}>
        <FormControl color="primary" required>
          <InputLabel htmlFor="username" className={classes.inputLabel}>
            Username:
          </InputLabel>
          <Input
            id="username"
            value={username}
            className={classes.input}
            onChange={(e) => setusername(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl color="primary" required>
          <InputLabel htmlFor="password" className={classes.inputLabel}>
            Password:
          </InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            className={classes.input}
            onChange={(e) => setpassword(e.target.value)}
            aria-describedby="username-helper-text"
          />
          <FormHelperText id="username-helper-text">
            Your password is safe with us
          </FormHelperText>
        </FormControl>
        <br />
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          className={classes.button}
          disabled={!ValidateForm()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
