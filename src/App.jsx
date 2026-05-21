import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./modules/LoginPage";
import Navbar from "./modules/Navbar";
import Register from "./modules/RegisterPage";
import { ThemeProvider } from "./modules/ThemeProvider";
import Users from "./modules/Users";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
