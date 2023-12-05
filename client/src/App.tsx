import React, { useEffect } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "./config/routesConfig";
import { useActions } from "./hooks/useActions";
import { UUID } from "crypto";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { setAuth, setUserAsync } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate(routesConfig.path.login);
    } else {
      setAuth(true);
      setUserAsync(userId as UUID);
    }
  };

  return (
    <div id="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
};

export default App;
