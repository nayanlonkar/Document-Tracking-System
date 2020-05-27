import React, { useState } from "react";
import axios from "axios";
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
    marginBottom: "20px",
    width: "120px",
  },
});

export default function SignIn(props) {
  const classes = useStyles();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function ValidateForm() {
    return username.length > 0 && password.length > 0;
  }
  async function onSubmitHandler(event) {
    event.preventDefault();
    const param = {
      username: username,
      password: password,
    };
    try {
      let res = await axios.post("http://localhost:3001/api/login", param);
      res = res;
    } catch (error) {
      console.log(error);
    }
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
          LOG IN
        </Button>
        <br />
        <Button color="primary" onClick={(e) => props.settoggle(1)}>
          Create an account
        </Button>
      </form>
    </div>
  );
}
