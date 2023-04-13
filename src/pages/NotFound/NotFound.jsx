import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <>
    <h2>
      This page doesn't exist. Return <Link to="/" />
      back
    </h2>
  </>
);
