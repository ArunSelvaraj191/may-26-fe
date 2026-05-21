import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../modules/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("Current Theme in Navbar => ", theme);
  //   const [theme, setTheme] = useState("light");

  //   console.log("Current Theme => ", theme);

  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //   };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>
          <IconButton color="inherit" aria-label="home" onClick={toggleTheme}>
            {theme === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
