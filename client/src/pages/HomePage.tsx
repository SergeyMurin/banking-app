import * as React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import { routesConfig } from "../config/routesConfig";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const user = useTypedSelector((state) => state.app.user);
  return (
    <>
      <h1>Home</h1>
      <span>
        <span>{user.secondName}</span>
        <span>{user.name}</span>
        <span>{user.lastName}</span>
      </span>
      <div>Scans count : {user.scansCount}</div>
      <Link to={routesConfig.path.scanner}>Scan</Link>
    </>
  );
};

export default HomePage;
