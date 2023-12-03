import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { routesConfig } from "../config/routesConfig";
import ScannerPage from "../pages/ScannerPage";
import EditFormPage from "../pages/EditFormPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <Routes>
      <Route path={routesConfig.path.home} element={<HomePage />} />
      <Route path={routesConfig.path.login} element={<LoginPage />} />
      <Route path={routesConfig.path.scanner} element={<ScannerPage />} />
      <Route path={routesConfig.path.form} element={<EditFormPage />} />
      <Route path={routesConfig.path.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
