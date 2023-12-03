import * as React from "react";
import Login from "../components/login/Login";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
