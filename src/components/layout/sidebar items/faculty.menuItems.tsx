import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const facultyMenuItems: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"/faculty"}>Dashboard</NavLink>,
  },

  {
    key: "Create Course",
    label: <NavLink to={"/faculty/create-course"}>Create Course</NavLink>,
  },
  {
    key: "Create Semester",
    label: <NavLink to={"/faculty/create-semester"}>Create Semester</NavLink>,
  },
];
