// Login.tsx

import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { appConfig } from "../../config/appConfig";
import { useActions } from "../../hooks/useActions";
import { routesConfig } from "../../config/routesConfig";
import { useNavigate } from "react-router-dom";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [errorField, setErrorField] = useState("");
  const { setAuth } = useActions();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios
      .get(`${appConfig.API}/users`, { params: { username: usernameField } })
      .catch((error) => {
        debugger;
      });

    debugger;
    if (!response?.data.length) {
      setErrorField("Unknown user");
      return;
    }
    const user = response.data[0];
    if (!(user.password === passwordField)) {
      setErrorField("Wrong password");
      return;
    }
    setAuth(true);
    navigate(routesConfig.path.scanner)
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
        <p className="error">{errorField}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
