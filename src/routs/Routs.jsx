import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import DashBoard from "../layouts/DashBoard";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers";
import AddClass from "../pages/DashBoard/Instructor/AddClass";
import MyClass from "../pages/DashBoard/Instructor/MyClass";
import EnrolledClass from "../pages/DashBoard/Student/EnrolledClass";
import SelectedClass from "../pages/DashBoard/Student/SelectedClass";
import Classes from "../pages/Home/Classes";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymenHistory from "../pages/DashBoard/Student/PaymenHistory";
import Instructors from "../pages/DashBoard/Instructor/Instructors";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoutes from "./PrivateRoutes";
import EerrorPage from "../components/error/EerrorPage";
import StudentRoute from "./StudentRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EerrorPage></EerrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <EerrorPage></EerrorPage>,

    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },

      {
        path: "enrolled-class",
        element: (
          <StudentRoute>
            <EnrolledClass></EnrolledClass>
          </StudentRoute>
        ),
      },
      {
        path: "selected-class",
        element: (
          <StudentRoute>
            <SelectedClass></SelectedClass>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoute>
            <PaymenHistory></PaymenHistory>
          </StudentRoute>
        ),
      },
    ],
  },
]);
