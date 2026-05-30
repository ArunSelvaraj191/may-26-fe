import { Box, Button, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const backendApi = import.meta.env.VITE_BACKEND_API;
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
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

  const handleLogin = async () => {
    const response = await axios.post(`${backendApi}/login`, userDetails);
    console.log("response :::", response);
    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
      setOpenSnackbar(true);
      setSnackbarMsg(response.data.message);
      setTimeout(() => {
        navigate("/users");
      }, 2000);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="text" color="primary" onClick={handleNavigate}>
          Register
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message={snackbarMsg}
      />
    </div>
  );
};

export default Login;
