import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Login from "../pages/login/Login";

function LoggedinRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? <Outlet /> : <Login />;
}

export default LoggedinRoutes;
