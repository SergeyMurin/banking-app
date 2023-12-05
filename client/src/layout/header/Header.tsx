import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { isAuth } = useTypedSelector((state) => state.app);
  const { setAuth, removeUser } = useActions();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setAuth(false);
    removeUser();
    localStorage.removeItem("userId");
    navigate(routesConfig.path.login);
  };
  return (
    <header>
      <Link to={routesConfig.path.home}>Home</Link>
      {isAuth ? (
        <Link to={routesConfig.path.login} onClick={logoutHandler}>
          Log out
        </Link>
      ) : (
        <Link to={routesConfig.path.login}>Log in</Link>
      )}
    </header>
  );
};

export default Header;
