import * as React from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "../config/routesConfig";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface INotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
  const isAuth = useTypedSelector((state) => state.app.isAuth);
  return (
    <>
      <h1> Page Not Found</h1>
      <Link to={isAuth ? routesConfig.path.home : routesConfig.path.login}>
        Back to home
      </Link>
    </>
  );
};

export default NotFoundPage;
