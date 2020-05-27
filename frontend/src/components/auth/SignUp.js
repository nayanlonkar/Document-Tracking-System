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

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("this is console log");
    console.log(`first name is ${firstName}`);
    console.log(`last name is ${lastName}`);
    console.log(`username is ${username}`);
    console.log(`password is ${password}`);
    console.log(`confirm password is ${confirmPassword}`);
  }

  return (
    <div className="SignUp">
      <form className="SignUp-form" onSubmit={onSubmitHandler}>
        <FormControl color="primary">
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

        <FormControl color="primary">
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

        <FormControl color="primary">
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

        <FormControl color="primary">
          <InputLabel htmlFor="password" className={classes.inputLabel}>
            Password
          </InputLabel>
          <Input
            id="password"
            value={password}
            className={classes.input}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <br />

        <FormControl color="primary">
          <InputLabel htmlFor="confirmPassword" className={classes.inputLabel}>
            Confirm Password
          </InputLabel>
          <Input
            id="confirmPassword"
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
