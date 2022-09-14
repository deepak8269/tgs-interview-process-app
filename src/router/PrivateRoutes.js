import React from "react";
import { Route, Routes } from "react-router-dom";
// internal imports
import Error from "../pages/error/Error";

// routes
import routes from "./Urls";

const PrivateRoutes = () => {
  const { USER, WELCOME, EVALUATION, TEST } = routes;
  return (
    <Routes>
      <Route exact path={WELCOME.path} element={<WELCOME.Component />} />
      <Route exact path={USER.path} element={<USER.Component />} />
      <Route exact path={EVALUATION.path} element={<EVALUATION.Component />} />
      <Route exact path={TEST.path} element={<TEST.Component />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PrivateRoutes;
