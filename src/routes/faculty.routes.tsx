import CreateCourse from "../pages/faculty/CreateCourse";
import CreateSemester from "../pages/faculty/CreateSemester";
import FacultyDashboard from "../pages/faculty/Dashboard";

const facultyPaths = [
  {
    index: true,
    element: <FacultyDashboard />,
  },
  {
    path: "create-course",
    element: <CreateCourse />,
  },
  {
    path: "create-semester",
    element: <CreateSemester />,
  },
];

export default facultyPaths;
