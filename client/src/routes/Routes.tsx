import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { routesConfig } from "../config/routesConfig";
import ScannerPage from "../pages/ScannerPage";
import EditFormPage from "../pages/EditFormPage";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <Routes>
      <Route path={routesConfig.path.login} element={<LoginPage />} />
      <Route path={routesConfig.path.scanner} element={<ScannerPage />}></Route>
      <Route path={routesConfig.path.form} element={<EditFormPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
