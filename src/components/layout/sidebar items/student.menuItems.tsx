import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const studentMenuItems: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"/student"}>Dashboard</NavLink>,
  },

  {
    key: "Profile",
    label: <NavLink to={"/student/profile"}>Profile</NavLink>,
  },
];
