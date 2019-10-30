import React, { useState } from "react";
import "./login.scss";
import audio from "./soundtrack/sound1.mp3";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/userActions";
import LogIn from "./LogIn";
const sound = new Audio(audio);
const LogInC = props => {
  const [play, setPlay] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  function logIn(e) {
    e.preventDefault();
    props.fetchUsers(user);
  }
  function player() {
    if (!play) {
      sound.play();
      setPlay(true);
    } else {
      sound.pause();
      setPlay(false);
    }
  }
  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <LogIn
      logIn={logIn}
      player={player}
      changeHandler={changeHandler}
      play={play}
    />
  );
};

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  fetchUsers: user => dispatch(fetchUsers(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInC);
