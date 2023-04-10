import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => (
  <>
    <header>
      <Link to="/">Forgot</Link>
      <Link to="/ForgotSuccess">ForgotSuccess</Link>
      <Link to="/LogIn">LogIn</Link>
      <Link to="/Reset">Reset</Link>
      <Link to="/SignUp">SignUp</Link>
    </header>
    <Outlet />
  </>
);
