import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { routesConfig } from "../config/routesConfig";
import ScannerPage from "../pages/ScannerPage";
import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PhotosPage from "../pages/PhotosPage";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <Routes>
      <Route path={routesConfig.path.home} element={<HomePage />} />
      <Route path={routesConfig.path.login} element={<LoginPage />} />
      <Route path={routesConfig.path.scanner} element={<ScannerPage />} />
      <Route path={routesConfig.path.form} element={<FormPage />} />
      <Route path={routesConfig.path.photos} element={<PhotosPage />} />
      <Route path={routesConfig.path.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
