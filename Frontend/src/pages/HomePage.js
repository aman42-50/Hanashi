import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Widgets from "../components/Widgets";
import { ProfileProvider } from "../context/ProfileContext";

const HomePage = () => {
  return (
    <ProfileProvider>
      <div className="flex">
        <div className="basis-3/12">
          <Sidebar />
        </div>
        <div className="basis-6/12 border-x">
          <Outlet />
        </div>
        <div className="basis-3/12">
          <Widgets />
        </div>
      </div>
    </ProfileProvider>
  );
};

export default HomePage;
