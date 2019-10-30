import React from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default ({ logIn, player, changeHandler, play }) => (
  <div className="loginBody">
    <div className="loginContainer">
      <h3 className="title">you have to log in</h3>
      <form onSubmit={logIn}>
        <div className="inputsContainer">
          <div>
            <h5>name</h5>
            <input type="text" name="username" onChange={changeHandler} />
          </div>
          <div>
            <h5>password</h5>

            <input type="text" name="password" onChange={changeHandler} />
          </div>
        </div>
        <button onClick={player} className="playButton">
          {!play ? <FaVolumeMute size="20px" /> : <FaVolumeUp size="20px" />}
        </button>
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  </div>
);
