import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <h2>
        This page doesn't exist.
        <Link to="#" onClick={handleReturnClick}>
          Return
        </Link>
      </h2>
    </>
  );
};
