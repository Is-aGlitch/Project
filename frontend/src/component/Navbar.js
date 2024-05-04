import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <AppBar position="fixed" background="transparent">
      <Toolbar style={{ minHeight: "80px" }}>
        <Typography
          variant="h6"
          className={classes.title}
          style={{ fontSize: "32px", fontWeight: "800" }}
        >
          <img
            src="./logo.jpg"
            width="30px"
            height="auto"
          ></img>
          JOB HUNT
        </Typography>
        <div style={{ marginTop: "20px" }}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "18px" }}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  <Typography style={{ fontSize: "18px" }}>Add Jobs</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  <Typography style={{ fontSize: "18px" }}>Posted</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/employees")}
                >
                  <Typography style={{ fontSize: "18px" }}>
                    Employees
                  </Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "18px" }}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "18px" }}>Logout</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "15px" }}>Home</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  <Typography style={{ fontSize: "15px" }}>Applied</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "15px" }}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "15px" }}>Logout</Typography>
                </Button>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem>Resume Score</MenuItem>
                    <MenuItem>Practice Test</MenuItem>
                    <MenuItem onClick={() => handleClick(window.location.assign("https://www.jdoodle.com/embed/v1/a9071f79aa9e07e"))}>Practice Code </MenuItem>
                  </Select>
                </FormControl>
              </>
            )
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                <Typography style={{ fontSize: "18px" }}>Login</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                <Typography style={{ fontSize: "18px" }}>SignUp</Typography>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
