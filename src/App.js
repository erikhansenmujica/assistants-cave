import React from "react";
import "./App.css";
import Login from "./Login";
import { connect } from "react-redux";
import Welcome from "./Welcome";
import { fetchUser } from "./store/actions/userActions";
function App(props) {
  if (!Object.keys(props.user).length) props.fetchUser();
  return <div>{Object.keys(props.user).length ? <Welcome /> : <Login />}</div>;
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
