import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
