import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayOut = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashboardLayOut;
