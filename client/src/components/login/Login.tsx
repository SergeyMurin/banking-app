import React, { useState } from "react";
import axios from "axios";
import { appConfig } from "../../config/appConfig";
import { useActions } from "../../hooks/useActions";
import { routesConfig } from "../../config/routesConfig";
import { useNavigate } from "react-router-dom";
import { IIncomingUser } from "../../@types/interfaces";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [errorField, setErrorField] = useState("");
  const { setAuth, setUser } = useActions();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${appConfig.API}/users`, {
        params: { username: usernameField },
      });

      if (!response?.data.length) {
        setErrorField("Unknown user");
        return;
      }

      const incomingUser: IIncomingUser = response.data[0];

      if (!(incomingUser.password === passwordField)) {
        setErrorField("Wrong password");
        return;
      }

      setAuth(true);
      setUser(incomingUser);
      localStorage.setItem("userId", incomingUser.id);
      navigate(routesConfig.path.scanner);
    } catch (error) {
      console.error("Login error:", error);
      setErrorField("An error occurred during login");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          required
          type="text"
          placeholder="Username"
          value={usernameField}
          onChange={(e) => setUsernameField(e.target.value)}
        />
        <input
          required
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
