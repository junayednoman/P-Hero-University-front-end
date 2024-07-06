import StudentDashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";

const studentPaths = [
  {
    index: true,
    element: <StudentDashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];

export default studentPaths;
