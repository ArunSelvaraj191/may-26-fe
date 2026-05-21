import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    console.log("Name => ", event.target.name);
    console.log("Value => ", event.target.value);
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const handleRegister = () => {
    console.log("User Details => ", userDetails);
    if (userDetails.password !== userDetails.confirmPassword) {
      setOpenSnackbar(true);
      return;
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    console.log("Register Page Mounted");
    return () => {
      console.log("Register Page Unmounted");
    };
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
        color={"light" === "dark" ? "primary" : "error"}
      >
        Register
      </Typography>
      <Typography variant="body1">Welcome to Register Page</Typography>

      <Box>
        <TextField
          fullWidth
          name="username"
          value={userDetails.username}
          label="Username"
          variant="outlined"
          margin="normal"
          placeholder="Enter your username"
          sx={{ width: "50%" }}
          onChange={handleChange}
        />
      </Box>
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
      <Box>
        <TextField
          fullWidth
          name="confirmPassword"
          value={userDetails.confirmPassword}
          type="password"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          placeholder="Confirm your password"
          sx={{ width: "50%" }}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{ marginTop: 2, display: "flex", gap: 2, justifyContent: "center" }}
      >
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
        <Button variant="text" color="primary" onClick={handleNavigate}>
          Login
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message="Password and Confirm Password do not match!"
      />
    </Box>
  );
};

export default Register;
