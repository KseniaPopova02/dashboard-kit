import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <>
    <h2>
      This page doesn't exist. <Link to="/">Return</Link>
    </h2>
  </>
);
