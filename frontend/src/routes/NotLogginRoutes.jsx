import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function NotLogginRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default NotLogginRoutes;
