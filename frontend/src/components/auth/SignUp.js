import React, { useState } from "react";
import "./SignUp.css";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

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

export default function SignUp(props) {
  const classes = useStyles();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  function ValidateForm() {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    );
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const param = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
    };

    try {
    } catch (err) {}
  }

  return (
    <div className="SignUp">
      <form className="SignUp-form" onSubmit={onSubmitHandler}>
        <FormControl color="primary" required>
          <InputLabel htmlFor="firstname" className={classes.inputLabel}>
            First Name
          </InputLabel>
          <Input
            id="firstname"
            value={firstName}
            className={classes.input}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </FormControl>
        <br />

        <FormControl color="primary" required>
          <InputLabel htmlFor="lastname" className={classes.inputLabel}>
            Last Name
          </InputLabel>
          <Input
            id="lastname"
            value={lastName}
            className={classes.input}
            onChange={(e) => setlastName(e.target.value)}
          />
        </FormControl>
        <br />

        <FormControl color="primary" required>
          <InputLabel htmlFor="username" className={classes.inputLabel}>
            Username
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
            Password
          </InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            className={classes.input}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <br />

        <FormControl color="primary" required>
          <InputLabel htmlFor="confirmPassword" className={classes.inputLabel}>
            Confirm Password
          </InputLabel>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            className={classes.input}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </FormControl>
        <br />

        <Button
          className="Button"
          type="submit"
          color="primary"
          variant="outlined"
          className={classes.button}
          disabled={!ValidateForm()}
        >
          SIGN UP
        </Button>
        <br />
        <Button color="primary" onClick={(e) => props.settoggle(0)}>
          LOG IN
        </Button>
      </form>
    </div>
  );
}
