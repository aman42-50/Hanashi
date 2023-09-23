import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const SidebarButtons = ({ text, Icon, active, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" text-black flex text-center mr-14 py-2 px-4 rounded-2xl
       hover:bg-custom-color-3 hover:cursor-pointer"
      onClick={() => {
        navigate(route);
      }}
    >
      <Icon />
      <h5 className="ml-3 text-lg">{text}</h5>
    </div>
  );
};

export default SidebarButtons;
