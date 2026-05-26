import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const backendApi = import.meta.env.VITE_BACKEND_API;
  console.log("Backend API => ", backendApi);

  const handleEdit = (id, username) => {
    console.log("id =>", id);
    setEditUserId(id);
    setEditUserName(username);
  };

  const handleDelete = async (id) => {
    console.log("id =>", id);
    const response = await axios.delete(`${backendApi}/users/${id}`);
    console.log("Edit response ::", response);
    if (response.status == 200) {
      setOpenSnackbar(true);
      setSnackbarMsg(response.data.message);
      fetchUsers();
    }
  };

  const handleEditChange = (event) => {
    setEditUserName(event.target.value);
  };

  const saveEditUser = async () => {
    const payload = {
      username: editUserName,
    };
    const response = await axios.put(
      `${backendApi}/users/${editUserId}`,
      payload,
    );
    console.log("Edit response ::", response);
    if (response.status == 200) {
      setOpenSnackbar(true);
      setSnackbarMsg(response.data.message);
      setEditUserName("");
      setEditUserId(null);
      fetchUsers();
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const fetchUsers = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // console.log("Users => ", data);
    const response = await axios.get(`${backendApi}/users`); // http://localhost:5000/api/users
    console.log("Users => ", response);
    if (response.status === 200) {
      setUsers(response.data);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user._id}>
            {console.log("user id :::", user._id)}
            <Card sx={{ minWidth: 275, marginBottom: 2 }}>
              <CardContent>
                {user._id == editUserId ? (
                  <TextField
                    value={editUserName}
                    variant="outlined"
                    onChange={handleEditChange}
                  />
                ) : (
                  <h2>{user.username}</h2>
                )}
                <p>{user.email}</p>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton color="primary" aria-label="edit">
                  {editUserId && user._id == editUserId ? (
                    <SaveIcon onClick={saveEditUser} />
                  ) : (
                    <EditIcon
                      onClick={() => handleEdit(user._id, user.username)}
                    />
                  )}
                </IconButton>
                <IconButton color="secondary" aria-label="delete">
                  <DeleteIcon onClick={() => handleDelete(user._id)} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
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

export default Users;
