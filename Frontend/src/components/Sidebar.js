import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import AuthContext from "../context/authContext";
import SidebarButtons from "./SidebarButtons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CreateIcon from "@mui/icons-material/Create";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ProfileContext from "../context/ProfileContext";
import CreatePost from "./CreatePost";

const Sidebar = () => {
  const { logoutUser } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);
  const baseURL = "http://127.0.0.1:8000";
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-full w-3/12 fixed">
      <div className="inline-flex flex-col ml-14 mt-5 justify-start">
        <SidebarButtons text="Home" Icon={HomeOutlinedIcon} route="/" />
        <SidebarButtons
          text="Explore"
          Icon={ExploreOutlinedIcon}
          route="/explore"
        />
        <SidebarButtons text="Settings" Icon={SettingsOutlinedIcon} route="#" />
      </div>

      <div
        className=" text-white inline-flex ml-14 mt-3 py-3 px-10 rounded-full
        bg-custom-color-lavender hover:bg-custom-color-2 hover:cursor-pointer"
        onClick={handleClickOpen}
      >
        <CreateIcon />
        <h5 className="ml-3 text-lg">Post</h5>
      </div>

      <CreatePost visible={open} onClose={handleClose} />

      <div
        className="text-black flex text-center bottom-5 absolute ml-14 py-2 px-4 rounded-2xl hover:text-custom-color-2 hover:bg-custom-color-3 hover:cursor-pointer"
        onClick={logoutUser}
      >
        <LogoutOutlinedIcon />
        <h5 className="ml-3 text-lg">Logout</h5>
      </div>
    </div>
  );
};

export default Sidebar;
