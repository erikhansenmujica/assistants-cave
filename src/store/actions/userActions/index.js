import axios from "axios";
import { SET_USER } from "../../constants";

axios.defaults.withCredentials = true;
const setUsers = user => ({
  type: SET_USER,
  user
});

export const fetchUsers = user => dispatch =>
  axios
    .post("http://0.0.0.0:3000/login", user)
    .then(res => res.data)
    .then(user => dispatch(setUsers(user[0])));
export const fetchUser = () => dispatch =>
  axios
    .get("http://0.0.0.0:3000/me")
    .then(res => res.data)
    .then(user => dispatch(setUsers(user.credentials)));
