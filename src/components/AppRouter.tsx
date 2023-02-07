import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path}/>
      ))}
      <Route element={<div>404</div>} path="*" />
    </Routes>
  );
};

export default AppRouter;