import { Menu } from "antd";
import { Layout } from "antd";
import { adminMenuItems } from "./sidebar items/admin.meusItems";
import { facultyMenuItems } from "./sidebar items/faculty.menuItems";
import { studentMenuItems } from "./sidebar items/student.menuItems";
const { Sider } = Layout;

const userRoles = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = userRoles.STUDENT;
  let menuItems;
  switch (role) {
    case userRoles.ADMIN:
      menuItems = adminMenuItems;
      break;
    case userRoles.FACULTY:
      menuItems = facultyMenuItems;
      break;
    case userRoles.STUDENT:
      menuItems = studentMenuItems;
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        className="demo-logo-vertical"
        style={{ padding: "20px 20px", color: "white" }}
      >
        <h2>PH UNIVERSITY</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
