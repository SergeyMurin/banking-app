import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "../config/routesConfig";
import ScannerPage from "../pages/ScannerPage";
import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PhotosPage from "../pages/PhotosPage";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ManagerPage from "../pages/ManagerPage";
import LoginPage from "../pages/LoginPage";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  const isAuth = useTypedSelector((state) => state.app.isAuth);
  const user = useTypedSelector((state) => state.app.user);

  return (
    <Routes>
      <Route path={routesConfig.path.login} element={<LoginPage />} />

      {isAuth && (
        <>
          <Route path={routesConfig.path.home} element={<HomePage />} />
          <Route path={routesConfig.path.scanner} element={<ScannerPage />} />
          <Route path={routesConfig.path.form} element={<FormPage />} />
          <Route path={routesConfig.path.photos} element={<PhotosPage />} />
        </>
      )}
      {isAuth && user.isManager && (
        <Route path={routesConfig.path.manager} element={<ManagerPage />} />
      )}
      <Route path={routesConfig.path.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
