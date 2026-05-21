import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleNavigate = () => {
    navigate("/register");
  };

  useEffect(() => {
    console.log("Component Updated => ", userDetails);
  }, [userDetails.email]);

  useEffect(() => {
    console.log("Login Page Mounted");
    return () => {
      console.log("Login Page Unmounted");
      // alert("Don't leave the Login Page");
      // return;
    };
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <p>Welcome to Login Page</p>
      <Box>
        <TextField
          fullWidth
          name="email"
          value={userDetails.email}
          label="Email"
          variant="outlined"
          margin="normal"
          placeholder="Enter your email"
          sx={{ width: "50%" }}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          name="password"
          value={userDetails.password}
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          placeholder="Enter your password"
          sx={{ width: "50%" }}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{ marginTop: 2, display: "flex", gap: 2, justifyContent: "center" }}
      >
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Button variant="text" color="primary" onClick={handleNavigate}>
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Login;
