import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  return auth ? <Layout /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
