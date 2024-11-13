import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setData } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setData({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={HandleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
