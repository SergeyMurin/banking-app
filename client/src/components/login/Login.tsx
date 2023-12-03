import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", usernameField, passwordField);
    //if ok
    navigate(routesConfig.path.scanner);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          required={true}
          type="text"
          placeholder="Username"
          value={usernameField}
          onChange={(e) => setUsernameField(e.target.value)}
        />
        <input
          required={true}
          type="password"
          placeholder="Password"
          value={passwordField}
          onChange={(e) => setPasswordField(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
