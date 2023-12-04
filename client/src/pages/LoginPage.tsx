import * as React from "react";
import Login from "../components/login/Login";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
